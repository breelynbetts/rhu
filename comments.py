from google.appengine.ext import ndb

class Comment(ndb.Model):
    name = ndb.StringProperty()
    type = ndb.StringProperty()
    content = ndb.StringProperty()
    time = ndb.DateTimeProperty()
