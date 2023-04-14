"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[475],{602:function(n,e,t){t.d(e,{Z:function(){return A}});t(791);var a,o,r,s=t(87),i=t(168),p=t(934),h=p.Z.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  margin-top: -15px;\n  margin-left: -15px;\n"]))),d=p.Z.li(o||(o=(0,i.Z)(["\n  flex-basis: calc(100% / 5 - 15px);\n\n  margin-top: 15px;\n  margin-left: 15px;\n\n  margin-bottom: 15px;\n"]))),c=p.Z.article(r||(r=(0,i.Z)(["\n  width: 220px;\n  height: 440px;\n"]))),l=t(184),A=function(n){var e=n.movies,t=n.location;return(0,l.jsx)(h,{children:e.map((function(n){var e=n.id,a=n.poster_path,o=n.release_date,r=n.title,i=n.vote_average;return(0,l.jsx)(d,{children:(0,l.jsx)(s.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,l.jsxs)(c,{children:[a?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:r}):(0,l.jsx)("img",{src:"".concat("data:image/png;base64,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"),alt:r,width:"250px",height:"350px"}),(0,l.jsx)("h2",{children:r}),(0,l.jsx)("p",{children:o}),(0,l.jsx)("p",{children:i})]})})},e)}))})}},475:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var a,o=t(439),r=t(791),s=t(689),i=t(207),p=t(602),h=t(168),d=t(934).Z.div(a||(a=(0,h.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.33;\n\n  color: #161900;\n\n  margin-bottom: 20px;\n"]))),c=t(184),l=function(){var n=(0,s.TH)(),e=(0,r.useState)([]),t=(0,o.Z)(e,2),a=t[0],h=t[1];return(0,r.useEffect)((function(){i.Z.searchMoviesTrending().then((function(n){h(n)}))}),[]),console.log(a),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438 \u0442\u0430 \u0422\u041e\u041f 20 \u0424\u0456\u043b\u044c\u043c\u0456\u0432"}),(0,c.jsx)(p.Z,{movies:a,location:n})]})},A=(0,r.memo)(l)},207:function(n,e,t){var a=t(243);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="09e88d7dd6157842e835fc31a8c547c7",r={searchMoviesTrending:function(){return a.Z.get("/trending/movie/week",{params:{api_key:o,language:"uk"}}).then((function(n){return n.data.results}))},searchMovies:function(n){return a.Z.get("/search/movie",{params:{api_key:o,query:n}}).then((function(n){return n.data.results}))},searchMoviesID:function(n){return a.Z.get("/movie/"+n,{params:{api_key:o}}).then((function(n){return n.data}))},searchMoviesIDcredits:function(n){return a.Z.get("/movie/"+n+"/credits",{params:{api_key:o}}).then((function(n){return n.data.cast}))},searchMoviesIDreviews:function(n){return a.Z.get("/movie/"+n+"/reviews",{params:{api_key:o}}).then((function(n){return n.data.results}))}};e.Z=r}}]);
//# sourceMappingURL=475.72db7c85.chunk.js.map