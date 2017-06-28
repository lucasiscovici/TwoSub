//® Lucas Iscovici - luluisco@yahoo.fr
(function() {

 	 window.loadScripts = function(f,comp) {
 	 	      comp= comp || function(){};
 	 	      f= f || [];
 	 	      if(f.length==0){
 	 	      	console.log('LucuxScript////// Format : [{"name":"lib","src":"https://","completion":function(){...}},...]');
 	 	      	return;
 	 	      }
 	 	      def=[{
                     "name": "jQuery",
                     "src": "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
                 }, {
                     "name": "moment",
                     'src': "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js"
                 }
                 , {
                 	"name":"WebVTTParser",
                 	"src":"https://rawgit.com/annevk/webvtt/master/parser.js"
                 }
             ];
             if (f=="def") {
             	f=def;
             }
             ff = f || def;
             this.init(ff,comp);
            

         }
     window.loadScripts.prototype.init = function(ff,comp) {
     	comp= comp || function(){};
     		checkAndLoadMultiples(ff,function(){
             	// console.log("finish");
             	comp();
             })
      };
                      function checkAndLoadMultiples(arr,comp) {
                      	comp= comp || function(){};
                      		if (arr.length==0){
                      			comp();
                      		}else{
                      		k=arr[0];
                      		cm=function(){};
                      		if ("completion" in k) {
                      			cm=k["completion"];
                      		}


                      		compl=cm;
                      		arr2=arr;
                      		arr2.shift();
                      		compl2=function(){
                      			// console.log("DEBUG ");
                      			// console.log(compl);
                      			mm=function(){
                      				compl();
                      				comp();
                      			}
                      			checkAndLoadMultiples(arr2,mm);
                      		}
                      		checkAndLoad(k["name"],k["src"],compl2,k);
                      		}

                      	
                      }

             function addS(src, completion) {
                 var script = document.createElement('script');
                 script.src = src;
                 script.onload = function() {
                     //do stuff with the script
                     completion();
                 };
                 document.head.appendChild(script);
             }

             function checkAndLoad(check, src, co,k) {
             	co = co || function(){};
		k=k || {};
                 if (!window[check])  {
                     addS(src, function() {
                         co();
                     });
                 } else {
                     co();
                 }
             }
         }());



 (function() {
 function addSn(src,done) {
 	// console.log("vvvv");
 	 var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    s.onload = function(){ 
    	// console.log(this);
    	done();};
    // Use any selecto
    s.onreadystatechange = function(){
    	// console.log(this);
    	done();
    };
    $("head").append(s);
 }
         window.TwoSubTed = function(url,c) {
         	c=c || function(){};
             init(function() {
                 $.get(url, function(e) {
                     this.vttparse = new WebVTTParser();
                     llr = this.vttparse.parse(e);
                     // console.log(llr);
                     // console.log("getURL PARSE");
                     window.TwoSubTed.prototype.vttparser= llr;
                     
                     to_arr_sec(function(){
                     	vasy2(function(){
                     		c();
                     	});
                     });
                 });
             });
         };
           window.TwoSubTed.prototype.vttparser="dd";
 window.TwoSubTed.prototype.loaderS=null;
 window.TwoSubTed.prototype.arr_sec=null;
         function init(c){
         	
         						// console.log("--twoSub_init");

				// addSn("http://lagencewebetudiante.fr/loadScripts.js",function(){
				// 	console.log("twoSub_init");
				jjj = new loadScripts("def",c); 
				// console.log(jjj);
	 window.TwoSubTed.prototype.loaderS = jjj;
				// });
         }
         window.TwoSubTed.prototype.nameInterval = null;
         window.TwoSubTed.prototype.stopInterval = function(){
         	clearInterval(window.TwoSubTed.prototype.nameInterval);
         };
         function to_arr_sec(c) {
         	c=c || function(){};
         	this.vttparser=window.TwoSubTed.prototype.vttparser;
             s = window.TwoSubTed.prototype.vttparser.cues;
             // console.log(this.vttparser);
             this.arr_sec={};
             fi=null;
             for (var i = 0; i < this.vttparser.cues.length; i++) {

                 bb = s[i];
                 v = auMillieme(bb.startTime)
                 this.arr_sec[v] = bb;
             }
             this.arr_sec["first"]=s[0];
             window.TwoSubTed.prototype.arr_sec=this.arr_sec;
             c();
         }

        

             function vasy2(f) {
             	f=f || function(){};
             	  $("video").on("pause", function() {
             	  	$("video")[0].playbackRate = 0.75;
             	  	clearInterval(window.TwoSubTed.prototype.nameInterval);
             	  });
                 $("video").on("play", function() {
                 	$("video")[0].playbackRate = 0.75;
                     k=setInterval(function() {
                         actualise();
                     }, 1);
                     window.TwoSubTed.prototype.nameInterval = k;
                 })
                 f();
             }
function auMillieme(nombre){
  return Math.round(10*nombre)/10;
}
             function actualise() {
                 v = $("video")[0].currentTime;
                 this.arr_sec=window.TwoSubTed.prototype.arr_sec;
                 parser = this.arr_sec;
                 m = auMillieme(v);
                 sec=m;
                 if (!$("#twosub")[0]) {
                 	// console.log($("#twosub")[0]);
                 		k=$("#ted-player > div").eq(1);
                 		if (k.hasClass("bottom:1")) {          
                 			k.find("span").parent().append("<span style='color:gold;' id='twosub'></br>"+parser["first"]["text"]+"</span> ");
                 			$("#twosub").attr("last",prop);
                 		}else{
                 			return;
                 		}
                 		
                 	}
                 // console.log(m);
                 if ((sec in parser) && ($("#twosub").attr("last") != sec) ) {

                 	$("#twosub").html("</br>"+parser[sec]["text"]);
                 	$("#twosub").attr("last",sec);
                 // console.log(sec+" "+parser[sec]["text"]);
             		}
             }
         }());
o=prompt("What do you want as a second subtitle (What language ? )(write the language in English) ?");
if (!$("track[label="+o+"]")[0]) {
	alert("Subtitle in "+o+" unknown!")
	exit();
}
f= new TwoSubTed($("track[label=French]").attr("src"),function(){
         	alert("TwoSub OK");
         });
