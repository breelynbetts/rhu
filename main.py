#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
from datetime import datetime
import time
from comments import Comment


env = jinja2.Environment(loader=jinja2.FileSystemLoader('Templates'))

# class SignInHandler(webapp2.RequestHandler):
#     def get(self):
#         template = env.get_template('signinpage.html')
#         self.response.write(template.render())
#
# class NewUserHandler(webapp2.RequestHandler):
#     def get(self):
#         template = env.get_template('newuser.html')
#         self.response.write(template.render())
#     def post(self):
#         self.request.get('emailsignup')
#         self.request.get('passwordsignup')
#         self.request.get('passwordsignup_confirm')
#         self.request.get('destination')

class HomeHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('homepage.html')
        self.response.write(template.render())

class AdventureHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('adventureform.html')
        self.response.write(template.render())

class TransportationHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('transportation.html')
        self.response.write(template.render())

class CultureHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('culture.html')
        self.response.write(template.render())

class StudentForumHandler(webapp2.RequestHandler):
    def get(self):
        query = Comment.query()
        query_result = query.order(-Comment.time)
        query_result = query_result.fetch()
        var = {
        "comments": query_result
        }
        template = env.get_template('studentforum.html')
        self.response.write(template.render(var))
    def post(self):
        comment = Comment (
            # name = self.request.get('name')
            time = datetime.now(),
            content = self.request.get('comment'),
            type = self.request.get('type'),
        )
        comment.put()
        time.sleep(.2)
        self.redirect('/studentforum')
        template = env.get_template('studentforum.html')
        self.response.write(template.render())

class GoogleMapsHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('map.html')
        self.response.write(template.render())

class UserPreferencesHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('preferences.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', HomeHandler),
    ('/home', HomeHandler),
    ('/adventure', AdventureHandler),
    ('/culture', CultureHandler),
    ('/transportation', TransportationHandler),
    ('/studentforum', StudentForumHandler),
    ('/map', GoogleMapsHandler),
    ('/preferences', UserPreferencesHandler),
], debug=True)
