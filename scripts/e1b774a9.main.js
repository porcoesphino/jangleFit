window.jangleFit={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";var a=new jangleFit.Models.User;a.fetch(),a.isInitialised()&&(jangleFit.currentUser=a),jangleFit.router=new this.Routers.JanglefitRouter}},$(document).ready(function(){"use strict";$("li.disabled > a:link").on("click",function(a){a.preventDefault()}),$("nav a").on("click",function(){$(this)[0].classList.contains("dropdown-toggle")||$(this).parent()[0].classList.contains("disabled")||($(".navbar").find(".active").removeClass("active"),$("nav.navbar").find(".navbar-collapse.in").removeClass("in").addClass("collapse"),$(this).parent().addClass("active"))}),jangleFit.init()}),this.jangleFit=this.jangleFit||{},this.jangleFit.Templates=this.jangleFit.Templates||{},Handlebars.registerPartial("chart4-ex",Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'Minutes to spend on each exercise: 2, 1, 1, 1, 6.\n\n\nExercise 1\n\nFeet astride, arms upward. Touch floor outside left foot, between feet, press once then outside right foot, circle bend backwards as far as possible, reverse direction after half the number of counts. Do not strain to keep knees straight. Keep arms above head and make full circle, bending backward past vertical each time.\n\n\nExercise 2\n\nBack lying, legs straight, feet together, arms straight overhead. Sit up and touch the toes keeping the arms and legs straight. Use chair to hook feet under only if necessary.\n\n\nExercise 3\n\nFront lying, hands and arms stretched sideways. Lift head, shoulders, arms, chest and both legs as high as possible. Keep legs straight, raise chest and both thighs completely off floor.\n\n\nExercise 4\n\nFront lying, palms of hands flat on floor, approximately 1 foot from ears directly to side of head, Straighten arms to lift body. Chest must touch floor of each completed movement.\n\n\nExercise 5\n\nStationary run - (count a step each time left foot touches floor. Lift feet approximately 4 inches off floor). Every 75 steps do 10 "semi-squat jumps". Repeat this sequence until required number of steps is completed. \nSemi-squat jumps--Drop to a half crouch position with hands on knees and arms straight, keep back as straight as possible, right foot slightly ahead of left. Jump to upright position with body straight and feet leaving floor, Reverse position of feet before landing. Return to half crouch position and repeat.\n'})),this.jangleFit.Templates["app/scripts/templates/about.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="text-justify">\n<blockquote class="blockquote-reverse">\n  <p>Everybody has a plan until they get punched in the mouth.</p>\n  <footer>Mike Tyson from <cite title="the Internet somewhere">the Internet somewhere</cite></footer>\n</blockquote>\n\n<ul class="media-list">\n  <li class="media">\n    <img class="media-object pull-right" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIj48L3JlY3Q+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" style="width: 64px; height: 64px;">\n    <div class="media-body">\n      <h4 class="media-heading">What is this?</h4>\n      <p>Something to help me keep a daily exercise routine. I want it to be simple, work offline and help motivate me. I figure it could help others so I\'m releasing it to the public and releasing the code.</p>\n    </div>\n  </li>\n  <li class="media">\n    <img class="media-object pull-right" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIj48L3JlY3Q+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" style="width: 64px; height: 64px;">\n    <div class="media-body">\n      <h4 class="media-heading">Why not use something else?</h4>\n        <p>You know why. Because the alternatives are bloated/complicated or feature-less. I\'m hoping to make something prettier, simpler and more useful (to me).</p>\n    </div>\n  </li>\n  <li class="media">\n    <img class="media-object pull-right" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIj48L3JlY3Q+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" style="width: 64px; height: 64px;">\n    <div class="media-body">\n      <h4 class="media-heading">Why not just exercise?</h4>\n      <p>I do. When I wake up I do a set of sit-ups and push-ups. I think that can be improved on. And sometimes motivation is haaaard.</p>\n    </div>\n  </li>\n  <li class="media">\n    <img class="media-object pull-right" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIj48L3JlY3Q+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" style="width: 64px; height: 64px;">\n    <div class="media-body">\n      <h4 class="media-heading">Surely not you!? How are you not motivated?</h4>\n      <p>These get in my way: Drinking, travelling, living out of cars, staying at friends houses, hitch hiking and a rocking boat.</p>\n    </div>\n  </li>\n  <li class="media">\n    <img class="media-object pull-right" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIj48L3JlY3Q+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" style="width: 64px; height: 64px;">\n    <div class="media-body">\n      <h4 class="media-heading">Okay, what\'s on the roadmap?</h4>\n      <p>Tracking, Seinfield calender, sparkline, 7 minute workout, hackers diet, offline access, centralised database, data export, integration with other services.</p>\n    </div>\n  </li>\n  <li class="media">\n    <img class="media-object pull-right" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIj48L3JlY3Q+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" style="width: 64px; height: 64px;">\n    <div class="media-body">\n      <h4 class="media-heading">Gamification!?? I hate that term!</h4>\n        <p>I know. So do most of my friends ;) Unfortunately I didn\'t use the term. I\'ll fix that.</p>\n    </div>\n  </li>\n</ul>\n\n<div class="alert alert-warning"><strong>Note:</strong> This app will not include anything requiring equipment.</div>\n</div>\n'}),this.jangleFit.Templates["app/scripts/templates/contact.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<div><p>You can try and contact me if you really want. For now though this page is just a test of backbone routers.</p></div>\n"}),this.jangleFit.Templates["app/scripts/templates/ladder.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="";return f+='<div class="panel-group id="table-accordian">\n  <div class="panel panel-success">\n    <div class="panel-heading">\n      <a data-toggle="collapse" data-parent="#table-accordian" href="#chart4">\n        Chart 4\n      </a>\n    </div>\n    <div id="chart4" class="panel-collapse collapse in">\n      <div class="table-responsive">\n        <table class="table table-striped table-bordered table-condensed">\n          <thead>\n            <tr>\n              <th>Level</th>\n              <th>Stretching</th>\n              <th>Sit-up</th>\n              <th>Back extension</th>\n              <th>Push-up</th>\n<!-- TODO: Move the title into the th and adjust css -->\n<!-- TODO: Touch screen support?? -->\n              <th><abbr title="Stationary Run">Option 1</abbr></th>\n              <th><abbr title="Outside Run">Option 2</abbr></th>\n              <th><abbr title="Outside Walk">Option 3</abbr></th>\n            </tr>\n          </thead>\n          <tbody>\n\n\n\n          </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n'}),this.jangleFit.Templates["app/scripts/templates/log.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="";return f+='<div class="panel-group id="table-accordian">\n  <div class="panel panel-success">\n    <div class="panel-heading">\n      <a data-toggle="collapse" data-parent="#table-accordian" href="#chart4">\n        Log\n      </a>\n    </div>\n    <div id="log" class="panel-collapse collapse in">\n      <div class="table-responsive">\n        <table class="table table-striped table-bordered table-condensed">\n          <thead>\n            <tr>\n<!-- TODO: Move the title into the th and adjust css -->\n<!-- TODO: Touch screen support?? -->\n              <th><abbr title="Time Finished">Timestamp</abbr></th>\n              <th>Activity</th>\n              <th>Duration</th>\n              <th>Count</th>\n            </tr>\n          </thead>\n          <tbody>\n\n\n\n          </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n'}),this.jangleFit.Templates["app/scripts/templates/login-alt.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<!-- Tabbed is awesome!! -->\n<div class="omb_login">\n    	<h3 class="omb_authTitle">Login or <a href="#">Sign up</a></h3>\n		<div class="row omb_row-sm-offset-3 omb_socialButtons">\n    	    <div class="col-xs-4 col-sm-2">\n		        <a href="#" class="btn btn-lg btn-block omb_btn-facebook">\n			        <i class="fa fa-facebook visible-xs"></i>\n			        <span class="hidden-xs">Facebook</span>\n		        </a>\n	        </div>\n        	<div class="col-xs-4 col-sm-2">\n		        <a href="#" class="btn btn-lg btn-block omb_btn-twitter">\n			        <i class="fa fa-twitter visible-xs"></i>\n			        <span class="hidden-xs">Twitter</span>\n		        </a>\n	        </div>	\n        	<div class="col-xs-4 col-sm-2">\n		        <a href="#" class="btn btn-lg btn-block omb_btn-google">\n			        <i class="fa fa-google-plus visible-xs"></i>\n			        <span class="hidden-xs">Google+</span>\n		        </a>\n	        </div>	\n		</div>\n\n		<div class="row omb_row-sm-offset-3 omb_loginOr">\n			<div class="col-xs-12 col-sm-6">\n				<hr class="omb_hrOr">\n				<span class="omb_spanOr">or</span>\n			</div>\n		</div>\n\n		<div class="row omb_row-sm-offset-3">\n			<div class="col-xs-12 col-sm-6">	\n			    <form class="omb_loginForm" action="" autocomplete="off" method="POST">\n					<div class="input-group">\n						<span class="input-group-addon"><i class="fa fa-user"></i></span>\n						<input type="text" class="form-control" name="username" placeholder="email address">\n					</div>\n					<span class="help-block"></span>\n										\n					<div class="input-group">\n						<span class="input-group-addon"><i class="fa fa-lock"></i></span>\n						<input  type="password" class="form-control" name="password" placeholder="Password">\n					</div>\n                    <span class="help-block">Password error</span>\n\n					<button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>\n				</form>\n			</div>\n    	</div>\n		<div class="row omb_row-sm-offset-3">\n			<div class="col-xs-12 col-sm-3">\n				<label class="checkbox">\n					<input type="checkbox" value="remember-me">Remember Me\n				</label>\n			</div>\n			<div class="col-xs-12 col-sm-3">\n				<p class="omb_forgotPwd">\n					<a href="#">Forgot password?</a>\n				</p>\n			</div>\n		</div>\n	</div>\n'}),this.jangleFit.Templates["app/scripts/templates/login.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<form class="form-signin" role="form">\n  <h2 class="form-signin-heading">Please sign in</h2>\n  <input type="email" class="form-control" placeholder="Email address" required="" autofocus="">\n  <input type="password" class="form-control" placeholder="Password" required="">\n  <label class="checkbox">\n    <input type="checkbox" value="remember-me"> Remember me\n  </label>\n  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>\n</form>\n'}),this.jangleFit.Templates["app/scripts/templates/progress.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="";return f+='<div class="panel-group id="table-accordian">\n  <div class="panel panel-success">\n    <div class="panel-heading">\n      <a data-toggle="collapse" data-parent="#table-accordian" href="#chart4">\n        Chart 4\n      </a>\n    </div>\n    <div id="chart4" class="panel-collapse collapse in">\n      <div class="table-responsive">\n        <table class="table table-striped table-bordered table-condensed">\n          <thead>\n            <tr>\n              <th>Level</th>\n              <th>Stretching</th>\n              <th>Sit-up</th>\n              <th>Back extension</th>\n              <th>Push-up</th>\n<!-- TODO: Move the title into the th and adjust css -->\n<!-- TODO: Touch screen support?? -->\n              <th><abbr title="Stationary Run">Option 1</abbr></th>\n              <th><abbr title="Outside Run">Option 2</abbr></th>\n              <th><abbr title="Outside Walk">Option 3</abbr></th>\n            </tr>\n          </thead>\n          <tbody>\n\n\n\n          </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n'}),this.jangleFit.Templates["app/scripts/templates/rung.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="  <td>",(f=c.level)?f=f.call(b,{hash:{},data:e}):(f=b.level,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.ex0)?f=f.call(b,{hash:{},data:e}):(f=b.ex0,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.ex1)?f=f.call(b,{hash:{},data:e}):(f=b.ex1,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.ex2)?f=f.call(b,{hash:{},data:e}):(f=b.ex2,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.ex3)?f=f.call(b,{hash:{},data:e}):(f=b.ex3,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.ex4)?f=f.call(b,{hash:{},data:e}):(f=b.ex4,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.ex5)?f=f.call(b,{hash:{},data:e}):(f=b.ex5,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.ex6)?f=f.call(b,{hash:{},data:e}):(f=b.ex6,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n"}),this.jangleFit.Templates["app/scripts/templates/session.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="";return f+='<div class="jumbotron">\n<h2 class="form-signin-heading text-center">Let\'s Go!</h2>\n<div id="update" style="display:none;">\n<h2 id="timer" class="text-center">0</h2>\n<div class="input-group">\n  <span class="input-group-addon" id="activity">Activity</span>\n  <input type="number" class="form-control" placeholder="Reps" id="reps" step="1" min="0">\n  <div class="input-group-btn">\n    <button id="next-btn" type="button" class="btn btn-default" tabindex="-1"></button>\n\n  </div>\n</div>\n</div>\n  <div id="start">\n    <button id="start-btn" class="btn btn-default">Start!</button>\n  </div>\n</div>\n'}),this.jangleFit.Templates["app/scripts/templates/set.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="  <td>",(f=c.timestamp)?f=f.call(b,{hash:{},data:e}):(f=b.timestamp,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.activity)?f=f.call(b,{hash:{},data:e}):(f=b.activity,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.duration)?f=f.call(b,{hash:{},data:e}):(f=b.duration,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n  <td>",(f=c.count)?f=f.call(b,{hash:{},data:e}):(f=b.count,f=typeof f===h?f.apply(b):f),g+=i(f)+"</td>\n"}),this.jangleFit.Templates["app/scripts/templates/settings.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='  <h2 class="form-signin-heading text-center">Settings</h2>\n  <div class="form-group">\n    <label for="givenName" class="col-xs-4 control-label">Given Name</label>\n    <div class="input-group col-xs-8">\n      <input id="givenName" type="text" class="form-control" placeholder="Given Name" value="',(f=c.givenName)?f=f.call(b,{hash:{},data:e}):(f=b.givenName,f=typeof f===h?f.apply(b):f),g+=i(f)+'" required="" autofocus="" disabled>\n      <span class="input-group-btn">\n        <button class="btn btn-default" type="button">Edit</button>\n      </span>\n    </div>\n  </div>\n</div>\n<div class="form-group">\n    <label for="familyName" class="col-xs-4 control-label">Family Name</label>\n    <div class="input-group col-xs-8">\n      <input id="familyName" type="text" class="form-control" placeholder="Family Name" required="" value="',(f=c.familyName)?f=f.call(b,{hash:{},data:e}):(f=b.familyName,f=typeof f===h?f.apply(b):f),g+=i(f)+'" disabled>\n      <span class="input-group-btn">\n        <button class="btn btn-default" type="button">Edit</button>\n      </span>\n    </div>\n  </div>\n</div>\n<div class="form-group">\n    <label for="email" class="col-xs-4 control-label">Email</label>\n    <div class="col-xs-8">\n      <input type="email" class="form-control" id="email" placeholder="Email" value="',(f=c.email)?f=f.call(b,{hash:{},data:e}):(f=b.email,f=typeof f===h?f.apply(b):f),g+=i(f)+'">\n    </div>\n  </div>\n  <div class="form-group">\n    <label class="control-label col-xs-4" for="level">Level</label>\n    <div class="col-xs-3">\n      <select class="form-control" id="level">\n        <option>A+</option>\n        <option>A</option>\n        <option>A-</option>\n        <option>B+</option>\n        <option>B</option>\n        <option>B-</option>\n        <option>C+</option>\n        <option>C</option>\n        <option>C-</option>\n      </select>\n  </div>\n'}),this.jangleFit.Templates["app/scripts/templates/user-current.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<h2 class="text-center">Welcome ',(f=c.givenName)?f=f.call(b,{hash:{},data:e}):(f=b.givenName,f=typeof f===h?f.apply(b):f),g+=i(f)+'!</h2>\n<h3>5BX</h3>\n<p class="bg-info">Congratulations! You\'re up to Chart <span class="badge">4</span> Level <span class="badge bg-success">',(f=c.level)?f=f.call(b,{hash:{},data:e}):(f=b.level,f=typeof f===h?f.apply(b):f),g+=i(f)+"</span></p>\n"}),this.jangleFit.Templates["app/scripts/templates/user-new.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'  <h2 class="form-signin-heading text-center">Welcome</h2>\n  <input id="givenName" type="text" class="form-control" placeholder="Given name" required="" autofocus="">\n  <input id="familyName" type="text" class="form-control" placeholder="Family name" required="">\n  <button class="btn btn-primary btn-block" type="submit">Continue</button>\n'}),jangleFit.Collections=jangleFit.Collections||{},function(){"use strict";jangleFit.Collections.LadderCollection=Backbone.Collection.extend({localStorage:new Backbone.LocalStorage("janglefit-backbone-ladders"),initialize:function(){this.model=jangleFit.Models.RungModel},fetch:function(){var a=[["A+",30,22,50,42,400,7,19],["A",30,22,49,40,395,7,19],["A-",30,22,49,37,390,7,19],["B+",28,21,47,34,380,7.25,19],["B",28,21,46,32,375,7.25,20],["B-",28,21,46,30,365,7.25,20],["C+",26,19,44,28,355,7.5,21],["C",26,19,43,26,345,7.5,21],["C-",26,19,43,24,335,7.5,21],["D+",24,18,41,21,325,7.75,23],["D",24,18,40,19,315,7.75,23],["D-",24,18,40,17,300,7.75,23]].map(function(a){return{level:a[0],ex0:a[1],ex1:a[2],ex2:a[3],ex3:a[4],ex4:a[5],ex5:a[6],ex6:a[7]}});this.add(a)}})}(),jangleFit.Collections=jangleFit.Collections||{},function(){"use strict";jangleFit.Collections.SetCollection=Backbone.Collection.extend({localStorage:new Backbone.LocalStorage("janglefit-backbone-history"),initialize:function(){this.model=jangleFit.Models.Set}})}(),jangleFit.Models=jangleFit.Models||{},function(){"use strict";jangleFit.Models.RungModel=Backbone.Model.extend({initialize:function(){this.set("id",this.get("level"))}})}(),jangleFit.Models=jangleFit.Models||{},function(){"use strict";jangleFit.Models.User=Backbone.Model.extend({id:"current-user",defaults:{level:"D-"},localStorage:new Backbone.LocalStorage("janglefit-backbone-user-data"),initialize:function(){this.on("change",this.localSave,this)},localSave:function(){this.save()},isInitialised:function(){return this.get("givenName")&&this.get("familyName")}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.RungView=Backbone.View.extend({tagName:"tr",className:"rung",template:jangleFit.Templates["app/scripts/templates/rung.hbs"],initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.LadderView=Backbone.View.extend({template:jangleFit.Templates["app/scripts/templates/ladder.hbs"],initialize:function(){this.render(),this.listenTo(this.collection,"add",this.addRung),this.listenTo(this.collection,"reset",this.addAllRungs),this.collection.fetch()},render:function(){return this.$el.html(this.template()),this.addRungs(),this},addRung:function(a){var b=new jangleFit.Views.RungView({model:a});this.$el.find("tbody").append(b.render().el)},addRungs:function(){this.collection.each(this.addRung,this)}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.ProgressView=Backbone.View.extend({template:jangleFit.Templates["app/scripts/templates/progress.hbs"],initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this.addProgress(),this},addProgress:function(){var a=new jangleFit.Views.RungView({model:this.model});this.$el.find("tbody").append(a.render().el)}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.LogView=Backbone.View.extend({template:jangleFit.Templates["app/scripts/templates/log.hbs"],initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.SettingsView=Backbone.View.extend({tagName:"form",className:"form-horizontal center-block",attributes:{role:"form"},template:jangleFit.Templates["app/scripts/templates/settings.hbs"],events:{"change input":"fieldChanged","change select":"selectChanged"},initialize:function(){this.listenTo(jangleFit.currentUser,"change",this.render),this.render()},setLevel:function(){var a=jangleFit.currentUser.get("level");if(a){var b=this.$el.find('option:contains("'+a+'")');1!==b.length&&(b=b.filter(function(b,c){return c.innerText===a})),b.attr("selected",!0)}},render:function(){return this.$el.html(this.template(jangleFit.currentUser.toJSON())),this.setLevel(),this},selectChanged:function(a){var b=$(a.currentTarget),c=$("option:selected",b).val(),d={};d[b.attr("id")]=c,jangleFit.currentUser.set(d),this.setLevel()},fieldChanged:function(a){var b=$(a.currentTarget),c=b.parent().parent();if(b[0].checkValidity()){var d={};d[b.attr("id")]=b.val(),jangleFit.currentUser.set(d),c[0].classList.remove("has-error")}else c[0].classList.add("has-error")}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.SessionView=Backbone.View.extend({template:jangleFit.Templates["app/scripts/templates/session.hbs"],events:{"click button#next-btn":"nextHandler","click button#start-btn":"startHandler"},initialize:function(a){this.rung=a.rung,this.render()},close:function(){this.counterStop()},render:function(){return this.$el.html(this.template()),this},counterStart:function(){this.counter=setInterval(this.countDown.bind(this),1e3)},counterStop:function(){console.debug("Killing timer"),window.clearInterval(this.counter)},countDown:function(){console.debug("Still here"),isNaN(this.count)||(this.count=this.count-1,this.updateCounter(),5===this.count%10&&(window.location.hash="ignore",window.setTimeout(function(){window.stop()},0)))},updateCounter:function(){var a="text-danger",b=this.$el.find("#timer");b.text(this.count),this.count<0?b.addClass(a):b.removeClass(a)},startHandler:function(a){a.preventDefault(),jangleFit.router.dirty=!0,this.$el.find("#start").hide(),this.$el.find("#update").show(),this.exNo=0,this.count="",this.renderPanel(),this.counterStart()},nextHandler:function(a){a.preventDefault(),this.state?(this.state=0,this.nextExercise(),this.counterStart(),this.renderPanel()):(this.state=1,this.counterStop(),this.renderButton())},renderButton:function(){var a=this.$el.find("#next-btn"),b="Done!";a.text()===b&&(b="Next!"),a.text(b)},renderPanel:function(){this.renderButton();var a=["Stretching","Sit-up","Extension","Push-up","Run"],b=[2,1,1,1,6],c="ex"+this.exNo;this.$el.find("#activity").text(a[this.exNo]),this.$el.find("#reps").attr("value",this.rung.get(c)),this.count=60*b[this.exNo],this.updateCounter()},nextExercise:function(){this.exNo=this.exNo+1,this.exNo>=5&&(this.counterStop(),$("#jangleFit-app").find(".jumbotron").html('<h2 class="form-signin-heading text-center">Congratulations!!</h2>'),jangleFit.router.dirty=!1)}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.UserNewView=Backbone.View.extend({tagName:"form",className:"form-login center-block",attributes:{role:"form"},template:jangleFit.Templates["app/scripts/templates/user-new.hbs"],events:{submit:"createUser"},render:function(){return this.$el.html(this.template()),this},createUser:function(a){a.preventDefault();var b=this.$("#givenName").val().trim(),c=this.$("#familyName").val().trim();b&&c&&(this.model=new jangleFit.Models.User({givenName:b,familyName:c}),this.model.save(),jangleFit.currentUser=this.model,jangleFit.router.navigate("#/home",{trigger:!0}))}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.UserCurrentView=Backbone.View.extend({template:jangleFit.Templates["app/scripts/templates/user-current.hbs"],initialize:function(){this.render()},render:function(){return this.$el.html(this.template(this.model.attributes)),this}})}(),jangleFit.Views=jangleFit.Views||{},function(){"use strict";jangleFit.Views.MainView=Backbone.View.extend({initialize:function(){this.userView=new jangleFit.Views.UserCurrentView({model:this.model}),this.rung=this.getCurrentRung(this.model),this.progressView=new jangleFit.Views.ProgressView({model:this.rung}),this.sessionView=new jangleFit.Views.SessionView({rung:this.rung}),this.render()},render:function(){return this.$el.append(this.userView.el),this.$el.append(this.progressView.el),this.$el.append(this.sessionView.el),this},close:function(){this.sessionView.close()},getCurrentRung:function(a){var b=new jangleFit.Collections.LadderCollection;return b.fetch(),b.get(a.get("level"))}})}(),jangleFit.Routers=jangleFit.Routers||{},function(){"use strict";jangleFit.Routers.JanglefitRouter=Backbone.Router.extend({initialize:function(){$(window).on("hashchange",this.hashChange),$(window).on("beforeunload",this.beforeUnload),Backbone.history.start({pushState:!1})},routes:{"":"initial","(/)settings(/)":"settings","(/)log(/)":"log","(/)about(/)":"about","(/)chart4(/)":"chart4","*notFound":"initial"},selectMenu:function(){$("nav").find(".active").removeClass("active");var a=window.location.hash;if(!a)return void $("#home").addClass("active");var b=$('ul.nav a[href="'+a+'"]');b.length>0?(b.parent().addClass("active"),b.parents(".dropdown").addClass("active")):$("#home").addClass("active")},goWithMenuUpdate:function(a){this.dirty=!1,this.mainEl||(this.mainEl=$("#jangleFit-app")),this.currentView&&(this.currentView.close&&this.currentView.close(),this.currentView.remove()),this.currentView=a,this.mainEl.html(a.el),this.selectMenu()},chart4:function(){this.goWithMenuUpdate(new jangleFit.Views.LadderView({collection:new jangleFit.Collections.LadderCollection}))},about:function(){this.goWithMenuUpdate(new Backbone.View({el:jangleFit.Templates["app/scripts/templates/about.hbs"]()}))},updateIfAuth:function(a){var b;jangleFit.currentUser&&jangleFit.currentUser.isInitialised()?b=a():(b=new jangleFit.Views.UserNewView,this.navigate("")),this.goWithMenuUpdate(b)},initial:function(){this.updateIfAuth(function(){return new jangleFit.Views.MainView({model:jangleFit.currentUser})})},settings:function(){this.updateIfAuth(function(){return new jangleFit.Views.SettingsView})},log:function(){this.updateIfAuth(function(){return new jangleFit.Views.LogView})},hashChange:function(a){if(this.cancelNavigate)return a.stopImmediatePropagation(),void(this.cancelNavigate=!1);if("#ignore"===window.location.hash||"ignore"===window.location.hash)return a.stopImmediatePropagation(),this.cancelNavigate=!0,void(window.location.href=a.originalEvent.oldURL);var b=jangleFit.router.currentView,c=jangleFit.router.dirty;if(b&&c){var d=confirm("You have unsaved changes. To stay on the page, press cancel. To discard changes and leave the page, press OK");if(d===!0)return;a.stopImmediatePropagation(),this.cancelNavigate=!0,window.location.href=a.originalEvent.oldURL,jangleFit.router.selectMenu()}},beforeUnload:function(){var a=jangleFit.router.currentView,b=jangleFit.router.dirty;return a&&b?"You have unsaved changes. If you leave or reload this page, your changes will be lost.":void 0}})}();