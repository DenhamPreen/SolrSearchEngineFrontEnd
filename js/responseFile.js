function theTestText(){
return `
<html>
<head>
  

  <title>Solr browse: testRecords</title>

  <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

  <link rel="icon" type="image/x-icon" href="/solr/img/favicon.ico"/>
  <link rel="shortcut icon" type="image/x-icon" href="/solr/img/favicon.ico"/>

  <script type="text/javascript" src="/solr/libs/jquery-1.7.2.min.js"></script>

  <style>
    #admin{
      text-align: right;
      vertical-align: top;
    }

    #head{
      width: 100%;
    }

    .parsed_query_header {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 10pt;
      font-weight: bold;
    }

    .parsed_query {
      font-family: Courier, Courier New, monospaced;
      font-size: 10pt;
      font-weight: normal;
    }

    body {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 10pt;
    }

    a {
      color: #305CB3;
    }

    em {
      color: #FF833D;
    }

    .facets {
      float: left;
      margin: 5px;
      margin-top: 0px;
      width: 185px;
      padding: 5px;
      top: -20px;
      position: relative;
    }

    .facets h2 {
      background: #D9411E;
      padding: 2px 5px;
    }

    .facets ul {
      list-style: none;
      margin: 0;
      margin-bottom: 5px;
      margin-top: 5px;
      padding-left: 10px;
    }

    .facets ul li {
      color: #999;
      padding: 2px;
    }

    .facet-field {
      font-weight: bold;
    }

    .field-name {
      font-weight: bold;
      // align="right" valign="top"
    }

    .highlighted-facet-field {
      background: white;
    }

    .constraints {
      margin-top: 10px;
    }

    #query-form{
      width: 80%;
    }

    .query-box, .constraints {
      padding: 5px;
      margin: 5px;
      font-weight: normal;
      font-size: 24px;
      letter-spacing: 0.08em;
    }

    .query-box &q=boom+bap {
      margin-left: 8px;
      width: 60%;
      height: 50px;
      border: 1px solid #999;
      font-size: 1em;
      padding: 0.4em;
    }

    .query-box {

    }

    .query-box .inputs{
      left: 180px;
      position: relative;

    }

    #logo {
      width: 115px;
      margin: 0px 0px 20px 12px;
      border-style: none;
    }

    .pagination {
      padding-left: 33%;
      background: #eee;
      margin: 5px;
      margin-left: 210px;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .result-document {
      border: 1px solid #999;
      padding: 5px;
      margin: 5px;
      margin-left: 210px;
      margin-bottom: 15px;
    }

    .result-document div{
      padding: 5px;
    }

    .result-title{
      width:60%;
    }

    .result-body{
      background: #ddd;
    }

    .mlt{

    }

    .result-document:nth-child(2n+1) {
      background-color: #eee;
    }


    .selected-facet-field {
      font-weight: bold;
    }

    li.show {
      list-style: disc;
    }

    .error {
      color: white;
      background-color: red;
      left: 210px;
      width:80%;
      position: relative;

    }
  </style>
</head>
  <body>
    <div id="admin"><a href="/solr/#/testRecords">Solr Admin</a></div>
    <div id="head">
      <a href="/solr/testRecords/browse"><img src="/solr/img/solr.svg" id="logo"/></a>
    </div>

    <div id="content">
      

<div class="error">
  </div>

<div class="query-box">
  <form id="query-form" action="/solr/testRecords/browse" method="GET">
    Find:
    <input type="text" id="q" name="q" value="boom bap"/>
    <input type="submit"/>

        
    <div class="constraints">
          </div>

    <div class="parsed_query_header">
          </div>

  </form>
</div>

<div class="facets">
  

      </div>

<div class="pagination">
  <span>
    <span class="results-found">25</span>
    results found in
    154ms
  </span>

  Page <span class="page-num">1</span> of <span class="page-count">3</span>
</div>

<div class="results">
    

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\bigband.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  17639
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            keywords:
          </th>

          <td align="left" valign="top">
                  jazz, dixieland, hot jazz, red hot jazz, jass, jazz history,  fletcher henderson, benny goodman discography, jazz discography, 1920s, music, music education, trumpet, cornet, clarinet, piano, drums, bass, tuba, banjo, trombone, saxophone, washboard, record collecting, 78 records, african american, black, history, songs, blues, improvisation, real audio
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  The Origins Of Big Band Music
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            description:
          </th>

          <td align="left" valign="top">
                  Origins of Big Band Music by Bob Thomas. A history of Jazz before 1930. This site contains over 1000 songs from this era in Real Audio 3 format, as well as hundreds of biographies and discographies of Jazz musicians.
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\bigband.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  The Origins Of Big Band Music
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            keywords_str:
          </th>

          <td align="left" valign="top">
                  jazz, dixieland, hot jazz, red hot jazz, jass, jazz history,  fletcher henderson, benny goodman discography, jazz discography, 1920s, music, music education, trumpet, cornet, clarinet, piano, drums, bass, tuba, banjo, trombone, saxophone, washboard, record
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  The Origins Of Big Band Music
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            description_str:
          </th>

          <td align="left" valign="top">
                  Origins of Big Band Music by Bob Thomas. A history of Jazz before 1930. This site contains over 1000 songs from this era in Real Audio 3 format, as well as hundreds of biographies and discographies of Jazz musicians.
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\bigband.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  The Origins Of Big Band Music
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228844024791040
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  4.0153813
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\cowboy.htm
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  79685
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator:
          </th>

          <td align="left" valign="top">
                  Microsoft FrontPage 4.0
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  KEITH COWBOY - THE REAL MC COY
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_hint:
          </th>

          <td align="left" valign="top">
                  text/html; charset=windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\cowboy.htm
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            progid:
          </th>

          <td align="left" valign="top">
                  FrontPage.Editor.Document
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  KEITH COWBOY - THE REAL MC COY
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            progid_str:
          </th>

          <td align="left" valign="top">
                  FrontPage.Editor.Document
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_hint_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=windows-1252
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  KEITH COWBOY - THE REAL MC COY
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\cowboy.htm
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator_str:
          </th>

          <td align="left" valign="top">
                  Microsoft FrontPage 4.0
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  KEITH COWBOY - THE REAL MC COY
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228844848971776
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  3.5049675
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (101).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  38053
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/1200px-Louis_Armstrong_restored.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (101).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer_str:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image_str:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/1200px-Louis_Armstrong_restored.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (101).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator_str:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots_str:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228855226728448
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  3.0020158
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\1066631489557.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  38573
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            description:
          </th>

          <td align="left" valign="top">
                  A willingness to cross boundaries has earned two of hip-hop's pioneers wide appeal and respect, writes Andrew Drever. - The Age Online
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            keywords:
          </th>

          <td align="left" valign="top">
                  australia, news, melbourne, the age, FAIRFAX, fairfax, THE AGE, MELBOURNE, newspaper, news, NEWSPAPER, sport, business, daily news, current affairs, technology, entertainment, health, football, footy, AGE, employment, opinion, politics, arts, canberra, movies, citysearch, online, internet, cricket, money, finance, drive, property, domain, food, epicure, emag
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  Jungle Brothers still untamed - www.theage.com.au
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\1066631489557.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            pragma:
          </th>

          <td align="left" valign="top">
                  no-cache
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            expires:
          </th>

          <td align="left" valign="top">
                  0
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  Jungle Brothers still untamed - www.theage.com.au
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            keywords_str:
          </th>

          <td align="left" valign="top">
                  australia, news, melbourne, the age, FAIRFAX, fairfax, THE AGE, MELBOURNE, newspaper, news, NEWSPAPER, sport, business, daily news, current affairs, technology, entertainment, health, football, footy, AGE, employment, opinion, politics, arts, canberra, mov
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  Jungle Brothers still untamed - www.theage.com.au
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            description_str:
          </th>

          <td align="left" valign="top">
                  A willingness to cross boundaries has earned two of hip-hop's pioneers wide appeal and respect, writes Andrew Drever. - The Age Online
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\1066631489557.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            pragma_str:
          </th>

          <td align="left" valign="top">
                  no-cache
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  Jungle Brothers still untamed - www.theage.com.au
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228838533398528
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  2.8140197
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\electro_funk_what_did_it_all_mean_wilson.htm
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  31364
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  ELECTRO-FUNK - WHAT DID IT ALL MEAN? - Greg Wilson
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_hint:
          </th>

          <td align="left" valign="top">
                  text/html; charset=iso-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\electro_funk_what_did_it_all_mean_wilson.htm
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  ELECTRO-FUNK - WHAT DID IT ALL MEAN? - Greg Wilson
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            keywords:
          </th>

          <td align="left" valign="top">
                  Globaldarkness, globaldarkness, global darkness, electro funk, drum&amp;bass, electro, TLR, T.L.R., DJ TLR, MP3, Mr Clavio, Lolita Strap, Creme organisation, creme organization, getitboyz, safetyinnumbers, gangsta, transmat, kanzleramt, johannes heil, eat static, link, hipnosis, klein &amp; mbo, knights of the turntables, nwa, dr dre, ice cube, ram records, dom &amp; roland, telex, moscow disco, moving shadow, virus, prototype, certificate 18, true playaz, roni size, tech itch, decoder, juice, dread, natty, dread, alexander robotnick, problemes d'amour, klein &amp; mbo, murdercapital, congo natty, planet control, planet rock, aux 88, 430 west, direct beat, gorgio moroder, hotmix, viewlexx, murder capital, patrick cowley, synth, righeira, kurtis blow, kool moe dee, cypher, raekwon, dj, dj godfather, dj assault, grandmaster flash, cybotron,  audio, free, detroit, chicago, dope, party, marley marl, roxanne shante, schoolly d, kraftwerk, tommy boy, cold chillin, darkcore, breakcore, e-z rollers, moving fusion, reinforced, clone, viewlexx, zion, bad company, matrix, fierce, trace, suv, die, krust, shy fx, sparky d, dynamix II, ram's horn, west-end, downtown, I-F, public enemy, chuck d, eazy e, pimp, playa, scorpio, melle mel, newcleus, mantronix, space, dj unknown, dream team, stinkworx, stinkworks, ra-x, baby records, ill discotto, jonzun crew, x-men, tuff crew, italo, italo disco, disco, rockmaster scott, dela soul, whodini, warp 9, grooverider, ghetto, ghettotech, booty, fabio, novamen, 8-bit rockers, saturday night, ruthless, x-ile, mandroid, cerrone, traxx, djax, furious five, treacherous three, computer rockers, dmx crew, davy dmx, anthony rother, technasia, adult, cosmic force, clone, eighties, 80's, boney m, indeep, divine, visage, chemise, bruce lee, kojak, baltimora, tavares, notorious b.i.g., tupac, tupac shakur, lil' kim, sparky D, shannon, puff daddy, missy elliot, snoop doggy dog, eminem, hashim, sync,  mobb deep, havoc, It &amp; My Computer, Syndicate Electronique, Porn Darsteller, Karl Kubler, Ottomas, Rollinka, autistic, autism, telescope, overdose, zomba, technohop, teleview, telex, egyptian lover, dj ss, proper talent, gyration, west street mob, mob, gang, soul sonic force, afrika bambaataa, zulu nation, krs one, marley marl, pete rock, queensbridge, hardcore, rave, full cycle, V, omni trio, foul play, blockparty, b-boy, epmd,  jedi knights, maurice joshua, erik b, rakim, mc shan, ice t, biz markie, stetsasonic, main source, source, too short,  slim shady, quasimoto, encore, evidence, ill boogie, blackberry, rawkus, abb, ultrmagnetic mc's, parliament, sample, radar, prince paul, peanut butter wolf, lime, mixmaster mike, rob swift, fatboy slim, jurassic five, dj ghetto, dj revolution, cut chemist, z-trip, beat junkies, crazylegs, rocksteady crew, breakdance, electric boogie, world class wrecking cru, freak, freaks, unknown dj, digital underground, 2 live crew, defcon, smurf,  grafitti, bomb, whole car, zephyr, roots, last poets, ltj bukem, good looking, renegade hardware, Farley Jakmaster Funk, Jack Frost, scott la rock, bdp, boogie down productions, blunt, gangstarr, premier, primo, dilated peoples, big l, defari, nas, escobar, dmx, babu, turntablism, planet asia, wu tang, method man, queens, total science, science, criminal, subtitles, kosheen, acen, oldschool hiphop, oldskool, nuskool, mc, rap, rapper, rappers, atari teenage riot, kid 606, 303, 808, 707, reprazent, peshay, goldie, dillinja, drum and bass, metroplex, metropolis, robert hood, m500, blade runner, steve pointdexter, dataphysix, dark comedy, m-demm, maurice joshua, funkmaster flex, stilleben, luke eargoggle, dj hell, hotmix 5, rutherford, fukkt, downlow, getitboyz, stinkworx, lounge, techno bass, drexciya, dopplereffekt, ectomorph, dj rap, dj hype, freestylers, andy c, shimon, johnny l, john b, drum and bass champions, jungle, DJ, bunker, bunker records, den haag, acidplanet, acid planet, dj, deejay, suburban, Bass, bass, jack tracks, vinyl, warehouse, vynil, wbmx, rap,  babylon, origin unknown, style,  capsite, electro empire, remarc, stylez, hula, gene hunt, robert owens, 303, 808, 909, rudebwoy, steppa, techno, ersatz audio, acid, house, acid house, acid techno, hip hop, hiphop, geto boys, n.w.a., warp, metalheadz, ganja kru, audio blueprint, under fire, stakka, skynet, digital, photek, source direct, teebee, stamina, trip to the moon, aphrodite, urban takeover, john foxx, the normal, miss kittin, the hacker, international deejay gigolo, doc scott, no u turn, nico, philly, jah, rastafari, flex, selasi, lemon d, fresh kutt, rugged, raw, brockie, cut, sub, deepdisco, makai, j majik, infrared, lemon d, black science, scratch, dj spooky, chrome, panacea, shizuo, patrick catani, alec empire, cult, digital hardcore, dhr, sound system, massive, jump, crew,  mash, loft, mix, Mix, champion sound, roller, rolling, rinse, rinse out, lighter, tunes, tune, junglism, junglist, junglistic, urban, urban jungle, jungle techno, rude, rude boy, b-boy, bad boy, techstep, hardstep, dynamix II, ralphi rosario, ed rush, optical, bar&amp;boos, breakbeat, beatz, bar en boos,  ganja man, dubplate, dub plate, dub, soundwise, soundboy, sound, acidplanet, bunker, ragga, ragga jungle, raggamuffin, origin unknown, nukubus, syncom data, legowelt, records, electro, oldskool, breakbeat, breakbeats, beats, beat, oldschool, jungle massive, oldschool hip-hop, hip hop, hiphop, smoke, krome and time, krome,  time, ganja, deadly, tigerstyle, derrick may, robert hood, frankie knuckles, trax, traxx, kung-fu
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=ISO-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            keywords_str:
          </th>

          <td align="left" valign="top">
                  Globaldarkness, globaldarkness, global darkness, electro funk, drum&amp;bass, electro, TLR, T.L.R., DJ TLR, MP3, Mr Clavio, Lolita Strap, Creme organisation, creme organization, getitboyz, safetyinnumbers, gangsta, transmat, kanzleramt, johannes heil, eat stat
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_hint_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=iso-8859-1
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  ELECTRO-FUNK - WHAT DID IT ALL MEAN? - Greg Wilson
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\electro_funk_what_did_it_all_mean_wilson.htm
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  ELECTRO-FUNK - WHAT DID IT ALL MEAN? - Greg Wilson
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228849711218688
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  2.8140197
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (20).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  39357
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/d/d6/Ruth_Brown_cropped.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (20).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  Editing Rhythm and blues (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  Editing Rhythm and blues (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer_str:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image_str:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/d/d6/Ruth_Brown_cropped.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  Editing Rhythm and blues (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (20).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator_str:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  Editing Rhythm and blues (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots_str:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228858990067712
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  2.8140197
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (91).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  43896
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/1200px-Louis_Armstrong_restored.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (91).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer_str:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image_str:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/1200px-Louis_Armstrong_restored.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (91).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator_str:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  Editing Jazz (section) - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots_str:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228863303909376
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  2.7564797
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (12).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  196616
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/DJ_Hypnotize_and_Baby_Cee.jpg/1200px-DJ_Hypnotize_and_Baby_Cee.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (12).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  View source for Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  View source for Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer_str:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image_str:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/DJ_Hypnotize_and_Baby_Cee.jpg/1200px-DJ_Hypnotize_and_Baby_Cee.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  View source for Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (12).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator_str:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  View source for Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            robots_str:
          </th>

          <td align="left" valign="top">
                  noindex,nofollow
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228856353947648
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  2.7523232
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (13).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  384552
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/DJ_Hypnotize_and_Baby_Cee.jpg/1200px-DJ_Hypnotize_and_Baby_Cee.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (13).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            viewport:
          </th>

          <td align="left" valign="top">
                  initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0, width=device-width
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer_str:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image_str:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/DJ_Hypnotize_and_Baby_Cee.jpg/1200px-DJ_Hypnotize_and_Baby_Cee.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\index (13).html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator_str:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.5
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  Hip hop music - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            viewport_str:
          </th>

          <td align="left" valign="top">
                  initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0, width=device-width
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228857070125056
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  2.7156684
            </td>
        </tr>
      </table>

  </div>
  

<div class="result-document">

  <table>
            <tr>
          <th align="right" valign="top" style="field-name">
            id:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\Rhythm_and_blues.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_size:
          </th>

          <td align="left" valign="top">
                  177598
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/d/d6/Ruth_Brown_cropped.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.4
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\Rhythm_and_blues.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title:
          </th>

          <td align="left" valign="top">
                  Rhythm and blues - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            viewport:
          </th>

          <td align="left" valign="top">
                  initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0, width=device-width
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title:
          </th>

          <td align="left" valign="top">
                  Rhythm and blues - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            stream_content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            referrer_str:
          </th>

          <td align="left" valign="top">
                  origin-when-cross-origin
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_encoding_str:
          </th>

          <td align="left" valign="top">
                  UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            content_type_str:
          </th>

          <td align="left" valign="top">
                  text/html; charset=UTF-8
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            og_image_str:
          </th>

          <td align="left" valign="top">
                  https://upload.wikimedia.org/wikipedia/commons/d/d6/Ruth_Brown_cropped.jpg
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            title_str:
          </th>

          <td align="left" valign="top">
                  Rhythm and blues - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            x_parsed_by_str:
          </th>

          <td align="left" valign="top">
                  org.apache.tika.parser.DefaultParser, org.apache.tika.parser.html.HtmlParser
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            resourcename_str:
          </th>

          <td align="left" valign="top">
                  C:\Users\Sabelo Xulu\Downloads\Scraped Pages\Rhythm_and_blues.html
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            generator_str:
          </th>

          <td align="left" valign="top">
                  MediaWiki 1.31.0-wmf.4
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            dc_title_str:
          </th>

          <td align="left" valign="top">
                  Rhythm and blues - Wikipedia
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            viewport_str:
          </th>

          <td align="left" valign="top">
                  initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0, width=device-width
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            _version_:
          </th>

          <td align="left" valign="top">
                  1583228870340902912
            </td>
        </tr>
            <tr>
          <th align="right" valign="top" style="field-name">
            score:
          </th>

          <td align="left" valign="top">
                  2.602702
            </td>
        </tr>
      </table>

  </div>
</div>

<div class="pagination">
    

  <span class="results-found">25</span>
  results found.

  Page <span class="page-num">1</span> of <span class="page-count">3</span>

        <a class="next-page" href="/solr/testRecords/browse?&q=boom+bap&start=10">next</a>
  
</div>

    </div>

    <div id="footer">
      <hr/>
<div>
  <span>Options:</span>

      <a href="/solr/testRecords/browse?&q=boom+bap&debug=true&fl=*,score">enable debug</a>
    -
  <a href="/solr/testRecords/browse?&q=boom+bap&wt=xml">XML results</a> 
</div>

<div>
  <a href="http://lucene.apache.org/solr">Solr Home Page</a>
</div>

    </div>
  </body>
</html>`;
}