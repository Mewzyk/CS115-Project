# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## Customize your APP title, subtitle and menus here
#########################################################################

response.logo = A(B('web',SPAN(2),'py'),XML('&trade;&nbsp;'),
                  _class="brand",_href="http://www.web2py.com/")
response.title = request.application.replace('_',' ').title()
response.subtitle = T('customize me!')

## read more at http://dev.w3.org/html5/markup/meta.name.html
response.meta.author = 'Your Name <you@example.com>'
response.meta.description = 'a cool new app'
response.meta.keywords = 'web2py, python, framework'
response.meta.generator = 'Web2py Web Framework'

## your http://google.com/analytics id
response.google_analytics_id = None

#########################################################################
## this is the main application menu add/remove items as required
#########################################################################
menu2 = [
(T('Example One'),'False', URL ('default','web2pyanim'), []),
(T('Example Two'),'False', URL ('default','heartpath'), []),
(T('Example Three'), False, URL( 'default', 'randlinegif'),[]), 
(T('Example Four'), False, URL( 'default', 'imgtoheart'),[]), 
(T('Example Five'), False, URL( 'default', 'twosvg'),[]), 
(T('Example Six'), False, URL( 'default', 'invispath'),[]), 
(T('Example Seven'),'False',URL('default', 'backrose'),[]), 
(T('Example Eight'),'False',URL('default', 'wire1'),[]), 
(T('Example Nine'),'False',URL('default', 'wire2'),[]) 
] 

