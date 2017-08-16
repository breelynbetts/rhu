from google.appengine.ext import ndb

class Comment(ndb.Model):
    email = ndb.StringProperty()
    type = ndb.StringProperty()
    content = ndb.StringProperty()
    time = ndb.DateTimeProperty()
