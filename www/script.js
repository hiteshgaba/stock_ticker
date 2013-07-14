
        function quote()
        {
            var com = document.getElementById("txtTicker").value.split(" : ")[0];
         
            // construct URL
            var url = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D"+ com +"%26f%3Dnl1p2spobat8mwva2j1hgx'&format=json&diagnostics=true&callback=handler"
          
          document.getElementById("name").innerHTML="";	
          document.getElementById("chart").innerHTML="";	
          document.getElementById("headlines").innerHTML="";
          document.getElementById("name").innerHTML="";	
          document.getElementById("qoute").innerHTML="";
          document.getElementById("%change").innerHTML="";
          document.getElementById("pclose").innerHTML="";
          document.getElementById("open").innerHTML="";	
          document.getElementById("bid").innerHTML="";
          document.getElementById("ask").innerHTML="";
          document.getElementById("1yte").innerHTML="";
          document.getElementById("dayrange").innerHTML="";
          document.getElementById("52weekrange").innerHTML="";
          document.getElementById("vol").innerHTML="";
          document.getElementById("avgvol").innerHTML="";	
          document.getElementById("mcap").innerHTML="";
          document.getElementById("dh").innerHTML="";
          document.getElementById("dl").innerHTML="";
          document.getElementById("SEx").innerHTML="";	

          document.getElementById("text").innerHTML="<br/><br/><br/><br/><br/><br/><br/><br/><br/><div style='text-align:right;'><img src='files/loading.gif' /></center>";	
          
          
          
	    // get quote via JSONP
            var script = document.createElement("script");
            script.setAttribute("src", url);
            document.getElementsByTagName("head")[0].appendChild(script);

	   
        }

	function headlines()
	{
        var com = document.getElementById("txtTicker").value.split(" : ")[0];
		 var headlines = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D"+ com +"%22%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa'&format=json&diagnostics=true&callback=cbfunc";

		  var script = document.createElement("script");
            	  script.setAttribute("src", headlines);
            	  document.getElementsByTagName("head")[0].appendChild(script);
	}
	function cbfunc(response)
	{
		if (response.query.count >= 1)
		{

			document.getElementById("headlines").innerHTML="<a class='promo-block pgday blue' style='color:white;'><span class='title'>Headlines</span><p>"+
"<span id='headlines0'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines1'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines2'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines3'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines4'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines5'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines6'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines7'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines8'></span>&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp<span id='headlines9'></span></p></a>";
			for(i=0;i<response.query.count&&i<10;i++)
			{
				document.getElementById("headlines"+i).innerHTML="<a href='"+ response.query.results.a[i].href +"'>"+response.query.results.a[i].content+"</a>";	
			}
		}
	}

	        
        function handler(response)
        {
            if (response.query.count == 1)
            {
		document.getElementById("text").innerHTML="";	
                document.getElementById("name").innerHTML="<h1>"+response.query.results.row.col0+"</h1>";		
                document.getElementById("qoute").innerHTML="Last Trade (Price): <b>"+response.query.results.row.col1+"</b>";
		document.getElementById("%change").innerHTML="% Change: <b>"+response.query.results.row.col2+"</b>";
		document.getElementById("pclose").innerHTML="Previous Close: <b>"+response.query.results.row.col4+"</b>";
		document.getElementById("open").innerHTML="Open: <b>"+response.query.results.row.col5+"</b>";		
                document.getElementById("bid").innerHTML="Bid: <b>"+response.query.results.row.col6+"</b>";
		document.getElementById("ask").innerHTML="Ask: <b>"+response.query.results.row.col7+"</b>";
		document.getElementById("1yte").innerHTML="1y Target Est: <b>"+response.query.results.row.col8+"</b>";
		document.getElementById("dayrange").innerHTML="Day's Range: <b>"+response.query.results.row.col9+"</b>";
		document.getElementById("52weekrange").innerHTML="52wk Range: <b>"+response.query.results.row.col10+"</b>";
		document.getElementById("vol").innerHTML="Volume: <b>"+response.query.results.row.col11+"</b>";
		document.getElementById("avgvol").innerHTML="Avg Vol (3m): <b>"+response.query.results.row.col12+"</b>";		
                document.getElementById("mcap").innerHTML="Market Cap: <b>"+response.query.results.row.col13+"</b>";
		document.getElementById("dh").innerHTML="Day's High: <b>"+response.query.results.row.col14+"</b>";
		document.getElementById("dl").innerHTML="Day's Low: <b>"+response.query.results.row.col15+"</b>";
		document.getElementById("SEx").innerHTML="Stock Exchange: <b>"+response.query.results.row.col16+"</b>";	
		url= 'http://ichart.finance.yahoo.com/b?s=' + response.query.results.row.col3;
	
		document.getElementById("chart").innerHTML="Chart<br><img width='420' height='238' src="+url+">";
            }
            else
            {
                alert("Error in JSONP response!");
            }
        }

    // ]]>
   
