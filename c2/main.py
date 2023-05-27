import webapp2
import os
from google.appengine.ext.webapp import template
class MainPage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), "index.html")
        context = {}
        self.response.out.write(template.render(path, context))
    def post(self):
        n = self.request.get("name")
        d = self.request.get("department")
        r = self.request.get("rollcall")
        path = os.path.join(os.path.dirname(__file__), "result.html")
        #context = {"info":n+"    "+d+"     "+r}
        context = {'info1': n,'info2': d,'info3': r}
        self.response.out.write(template.render(path, context))
app = webapp2.WSGIApplication([("/", MainPage)], debug=True)