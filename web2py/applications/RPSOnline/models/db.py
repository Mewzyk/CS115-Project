import datetime

db = DAL('sqlite://storage.sqlite')

#auth
from gluon.tools import *
auth = Auth(db)
auth.define_tables()
crud = Crud(db)

#database for profile
#Created on for "User since: "
#RPS for favorite choice
db.define_table('profile',
                Field('user_id', 'reference auth_user', default=auth.user_id),
                Field('username'),
                Field('pic', 'upload'),
                Field('RPS'),
                Field('body', 'text'),
                Field('created_on', 'datetime', default=request.now),
                format='%(name)s')


#profile validators
db.profile.username.requires = IS_NOT_IN_DB(db, 'profile.username')
db.profile.username.requires = IS_NOT_EMPTY()
db.profile.user_id.readable = db.profile.user_id.writable = False
db.profile.created_on.readable = db.profile.created_on.writable = False
db.profile.RPS.requires =  IS_IN_SET(["Rock", "Paper", "Scissors"])
