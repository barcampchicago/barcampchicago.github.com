  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-tumblr/jquery.tumblr.js at master · alexhayes/jquery-tumblr · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ySt//sgLFxfy6WOsd2VZbhIh3TkCAmMgnqmYIlgrjPc=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-18d753d300a46dd21304e40941ce8e2c2ac1069d.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-85da957cd4f05e6a533ebf98c06937f71ed4691d.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-2e452bd89a0d2b4439d3aea86d30b45c3bed4ee4.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-b7f36be5c112cf2a8c07b6b68af832871721cd30.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/alexhayes/jquery-tumblr/blob/64a8329b343da153b1636cbc37da4c91153bb5bf/jquery.tumblr.js'>
    <meta property="og:title" content="jquery-tumblr"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/alexhayes/jquery-tumblr"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png?1345673562"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="A tumblr feed processor for jquery. Contribute to jquery-tumblr development by creating an account on GitHub."/>

    <meta name="description" content="A tumblr feed processor for jquery. Contribute to jquery-tumblr development by creating an account on GitHub." />

  <link href="https://github.com/alexhayes/jquery-tumblr/commits/master.atom" rel="alternate" title="Recent Commits to jquery-tumblr:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production ">
    <div id="wrapper">

    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo " href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1338956357" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1338956357" />
          </a>


                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Falexhayes%2Fjquery-tumblr%2Fblob%2Fmaster%2Fjquery.tumblr.js">Sign in</a></li>
    </ul>



          
        </div>
      </div>

      

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          


              <ul class="pagehead-actions">


          <li>
            <span class="star-button"><a href="/login?return_to=%2Falexhayes%2Fjquery-tumblr" class="minibutton js-toggler-target entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow"><span class="mini-icon mini-icon-star"></span>Star</a><a class="social-count js-social-count" href="/alexhayes/jquery-tumblr/stargazers">15</a></span>
          </li>
          <li>
            <a href="/login?return_to=%2Falexhayes%2Fjquery-tumblr" class="minibutton js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to fork a repository" rel="nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/alexhayes/jquery-tumblr/network" class="social-count">5</a>
          </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/alexhayes" class="url fn" itemprop="url" rel="author">              <span itemprop="title">alexhayes</span>
              </a></span> /
            <strong><a href="/alexhayes/jquery-tumblr" class="js-current-repository">jquery-tumblr</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/alexhayes/jquery-tumblr" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/alexhayes/jquery-tumblr/network" highlight="repo_network">Network</a></li>
    <li><a href="/alexhayes/jquery-tumblr/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/alexhayes/jquery-tumblr/issues" highlight="repo_issues">Issues <span class='counter'>3</span></a></li>


    <li><a href="/alexhayes/jquery-tumblr/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/alexhayes/jquery-tumblr/tree-list/64a8329b343da153b1636cbc37da4c91153bb5bf"
      data-blob-url-prefix="/alexhayes/jquery-tumblr/blob/64a8329b343da153b1636cbc37da4c91153bb5bf"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/alexhayes/jquery-tumblr">jquery-tumblr</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/alexhayes/jquery-tumblr/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/alexhayes/jquery-tumblr/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
      <li><a href="/alexhayes/jquery-tumblr/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">

    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-master-branch="master"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
              <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/alexhayes/jquery-tumblr/blob/master/jquery.tumblr.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>
          </div>

          <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
          </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/alexhayes/jquery-tumblr" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/alexhayes/jquery-tumblr/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/alexhayes/jquery-tumblr/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:62ae1112aeed47c958ecf3ac3c8f2043 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:62ae1112aeed47c958ecf3ac3c8f2043 -->

<!-- block_view_fragment_key: views10/v8/blob:v21:296d34d76cd7f9e06036127bff3a8d42 -->
  <div id="slider">

    <div class="breadcrumb" data-path="jquery.tumblr.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/alexhayes/jquery-tumblr/tree/64a8329b343da153b1636cbc37da4c91153bb5bf" class="js-rewrite-sha" itemprop="url"><span itemprop="title">jquery-tumblr</span></a></b> / <strong class="final-path">jquery.tumblr.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="jquery.tumblr.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      <div class="commit file-history-tease js-blob-contributors-loader" data-request-url="/alexhayes/jquery-tumblr/contributors/master/jquery.tumblr.js" data-path="jquery.tumblr.js/">
        Fetching contributors…

        <div class="participation">
          <p class="quickstat js-loading-status-text"><img alt="Octocat-spinner-16px" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-16px.gif?1338956357" width="16" /></p>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="jquery.tumblr.js/" data-permalink-url="/alexhayes/jquery-tumblr/blob/64a8329b343da153b1636cbc37da4c91153bb5bf/jquery.tumblr.js" data-title="jquery-tumblr/jquery.tumblr.js at master · alexhayes/jquery-tumblr · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>363 lines (338 sloc)</span>
                <span>12.994 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/alexhayes/jquery-tumblr/edit/64a8329b343da153b1636cbc37da4c91153bb5bf/jquery.tumblr.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/alexhayes/jquery-tumblr/raw/master/jquery.tumblr.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/alexhayes/jquery-tumblr/blame/master/jquery.tumblr.js" class="minibutton grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/alexhayes/jquery-tumblr/commits/master/jquery.tumblr.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * jQuery tumblr plugin</span></div><div class='line' id='LC3'><span class="cm"> * This jQuery plugin was inspired by the work of Chris Tran - https://chris-tran.com/blog/?p=236</span></div><div class='line' id='LC4'><span class="cm"> * @name jquery-tumblr-0.2.js</span></div><div class='line' id='LC5'><span class="cm"> * @author Alex Hayes - http://alution.com</span></div><div class='line' id='LC6'><span class="cm"> * @version 0.3</span></div><div class='line' id='LC7'><span class="cm"> * @date Aug 17, 2011</span></div><div class='line' id='LC8'><span class="cm"> * @category jQuery plugin</span></div><div class='line' id='LC9'><span class="cm"> * @copyright (c) 2011 Alex Hayes (alution.com)</span></div><div class='line' id='LC10'><span class="cm"> * @license Dual licensed under the MIT and GPL licenses.</span></div><div class='line' id='LC11'><span class="cm"> * @todo Add ability to define hooks for user defined markup.</span></div><div class='line' id='LC12'><span class="cm"> */</span></div><div class='line' id='LC13'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	<span class="kd">var</span> <span class="nx">methods</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>		<span class="cm">/**</span></div><div class='line' id='LC18'><span class="cm">		 * Initialise the tumblr feed.</span></div><div class='line' id='LC19'><span class="cm">		 * </span></div><div class='line' id='LC20'><span class="cm">		 * @param options     Valid params:</span></div><div class='line' id='LC21'><span class="cm">		 *                        - url: your tumblr url (ie. http://(YOUR NAME).tumblr.com )</span></div><div class='line' id='LC22'><span class="cm">		 *                        - loading: A selector that specifies a element that can be shown when loading content from tumblr.</span></div><div class='line' id='LC23'><span class="cm">		 *                        - pagination: A selector that specifies where the pagination will reside. If one does not exist, pagination is disabled.</span></div><div class='line' id='LC24'><span class="cm">		 *                        - perPage: The number of posts to return. The default is 20, and the maximum is 50.</span></div><div class='line' id='LC25'><span class="cm">		 *                        - start: The post offset to start from. The default is 0.</span></div><div class='line' id='LC26'><span class="cm">		 *                        - paginationOptions: Other options to pass to jquery_pagination - See https://github.com/gbirke/jquery_pagination</span></div><div class='line' id='LC27'><span class="cm">		 *                        - photoSize: The photo size to use, accepted values are 75, 100, 250, 400, 500 and 1280. Default is 400.</span></div><div class='line' id='LC28'><span class="cm">		 *                        - videoSize: The video size to embed, accepted values are 250, 500 or false. If false, the tumblr &#39;video-player&#39; parameter will be used.</span></div><div class='line' id='LC29'><span class="cm">		 * 	                      - timeago: If true (default) then jquery-timeago will be used for post dates.</span></div><div class='line' id='LC30'><span class="cm">		 *                        - shortLength: For captions and titles that are less than this length the css class &#39;short&#39; will be added. Default is 50.</span></div><div class='line' id='LC31'><span class="cm">		 *                        - mediumLength: For captions and titles that are less than this length the css class &#39;medium&#39; will be added. Default is 100.</span></div><div class='line' id='LC32'><span class="cm">		 *                        - fancybox: If true (default) then fancybox will be used when there are multiple photos. See photoThumbSize and photoLightboxSize</span></div><div class='line' id='LC33'><span class="cm">		 *                        - photoThumbSize: If there are multiple photos, they will be output in a ul/li tags, this value will be the size of image used. Accepted values are 75, 100, 250, 400, 500 and 1280. Default is 75.</span></div><div class='line' id='LC34'><span class="cm">		 *                        - photoLightboxSize: If there are multiple photos, this image size will be used for lightbox. Accepted values are 75, 100, 250, 400, 500 and 1280. Default is 1280.</span></div><div class='line' id='LC35'><span class="cm">		 *                        - timeout: Ajax timeout defaults to 5000</span></div><div class='line' id='LC36'><span class="cm">		 */</span></div><div class='line' id='LC37'>		<span class="nx">init</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>			<span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC39'>				<span class="s1">&#39;loading&#39;</span>            <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC40'>				<span class="s1">&#39;pagination&#39;</span>         <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC41'>				<span class="s1">&#39;perPage&#39;</span>            <span class="o">:</span> <span class="mi">20</span><span class="p">,</span></div><div class='line' id='LC42'>				<span class="s1">&#39;start&#39;</span>              <span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC43'>				<span class="s1">&#39;paginationOptions&#39;</span>  <span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC44'>				<span class="s1">&#39;photoSize&#39;</span>          <span class="o">:</span> <span class="mi">400</span><span class="p">,</span></div><div class='line' id='LC45'>				<span class="s1">&#39;videoSize&#39;</span>          <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC46'>				<span class="s1">&#39;timeago&#39;</span>            <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC47'>				<span class="s1">&#39;shortLength&#39;</span>        <span class="o">:</span> <span class="mi">50</span><span class="p">,</span></div><div class='line' id='LC48'>				<span class="s1">&#39;mediumLength&#39;</span>       <span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC49'>				<span class="s1">&#39;fancybox&#39;</span>           <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC50'>				<span class="s1">&#39;photoThumbSize&#39;</span>     <span class="o">:</span> <span class="mi">75</span><span class="p">,</span></div><div class='line' id='LC51'>				<span class="s1">&#39;photoLightboxSize&#39;</span>  <span class="o">:</span> <span class="mi">500</span><span class="p">,</span></div><div class='line' id='LC52'>				<span class="s1">&#39;timeout&#39;</span>            <span class="o">:</span> <span class="mi">10000</span></div><div class='line' id='LC53'>		    <span class="p">};</span></div><div class='line' id='LC54'>			<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>        </div><div class='line' id='LC57'>				<span class="c1">// If options exist, lets merge them with our default settings</span></div><div class='line' id='LC58'>				<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC59'>					<span class="nx">data</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">),</span></div><div class='line' id='LC60'>					<span class="nx">posts</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;ul class=&quot;tumblr-posts&quot;/&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>				<span class="c1">// If the plugin hasn&#39;t been initialized yet</span></div><div class='line' id='LC63'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC64'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC65'>						<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC66'>					<span class="p">}</span></div><div class='line' id='LC67'>					<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">pagination</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC68'>						<span class="nx">settings</span><span class="p">.</span><span class="nx">pagination</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">pagination</span><span class="p">);</span></div><div class='line' id='LC69'>						<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">pagination</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'>							<span class="nx">settings</span><span class="p">.</span><span class="nx">pagination</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC71'>						<span class="p">}</span></div><div class='line' id='LC72'>					<span class="p">}</span></div><div class='line' id='LC73'>					<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">loading</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>						<span class="nx">settings</span><span class="p">.</span><span class="nx">loading</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">loading</span><span class="p">);</span></div><div class='line' id='LC75'>						<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>							<span class="nx">settings</span><span class="p">.</span><span class="nx">loading</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC77'>						<span class="p">}</span></div><div class='line' id='LC78'>					<span class="p">}</span></div><div class='line' id='LC79'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC80'>						<span class="nx">target</span>           <span class="o">:</span> <span class="nx">$this</span><span class="p">,</span></div><div class='line' id='LC81'>						<span class="nx">start</span>            <span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span></div><div class='line' id='LC82'>						<span class="nx">options</span>          <span class="o">:</span> <span class="nx">settings</span><span class="p">,</span></div><div class='line' id='LC83'>						<span class="nx">posts</span>            <span class="o">:</span> <span class="nx">posts</span><span class="p">,</span></div><div class='line' id='LC84'>						<span class="nx">pagination_setup</span> <span class="o">:</span> <span class="kc">false</span> </div><div class='line' id='LC85'>					<span class="p">});</span></div><div class='line' id='LC86'>				<span class="p">}</span></div><div class='line' id='LC87'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">);</span></div><div class='line' id='LC88'>			<span class="p">});</span></div><div class='line' id='LC89'>		<span class="p">},</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>		<span class="cm">/**</span></div><div class='line' id='LC92'><span class="cm">		 * Load the tumblr feed.</span></div><div class='line' id='LC93'><span class="cm">		 * </span></div><div class='line' id='LC94'><span class="cm">		 * @param Int page    The page number to load (starts at 0).</span></div><div class='line' id='LC95'><span class="cm">		 */</span></div><div class='line' id='LC96'>		<span class="nx">load</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">page</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>			<span class="c1">// Show all the loaders and slide up the content.</span></div><div class='line' id='LC99'>			<span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC100'>				<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC101'>					<span class="nx">data</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">);</span></div><div class='line' id='LC102'>				<span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">loading</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>					<span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC104'>				<span class="p">}</span></div><div class='line' id='LC105'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">slideUp</span><span class="p">();</span></div><div class='line' id='LC106'>			<span class="p">});</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>			<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> </div><div class='line' id='LC109'>				<span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">),</span></div><div class='line' id='LC110'>				<span class="nx">params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC111'>					<span class="nx">start</span><span class="o">:</span> <span class="nx">page</span> <span class="o">==</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">start</span> <span class="o">*</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perPage</span> <span class="o">:</span> <span class="nx">page</span> <span class="o">*</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perPage</span><span class="p">,</span></div><div class='line' id='LC112'>					<span class="nx">num</span><span class="o">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perPage</span></div><div class='line' id='LC113'>				<span class="p">},</span></div><div class='line' id='LC114'>				<span class="nx">url</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39;/api/read/json?&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">param</span><span class="p">(</span><span class="nx">params</span><span class="p">);</span>				</div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>			<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC117'>				<span class="nx">url</span><span class="o">:</span> <span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC118'>				<span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;script&#39;</span><span class="p">,</span></div><div class='line' id='LC119'>				<span class="nx">timeout</span><span class="o">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span><span class="p">,</span></div><div class='line' id='LC120'>				<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC121'>					<span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;handleAjaxSuccess&#39;</span><span class="p">,</span> <span class="nx">tumblr_api_read</span><span class="p">);</span></div><div class='line' id='LC122'>				<span class="p">},</span></div><div class='line' id='LC123'>				<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">statusTxt</span><span class="p">,</span> <span class="nx">errorTxt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>					<span class="c1">// Unlikely that this will be supported because in probably 99.9% of cases it will be cross domain. Will only work if they have setup a tunnel...</span></div><div class='line' id='LC125'>					<span class="nx">$this</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span></div><div class='line' id='LC126'>						<span class="s1">&#39;&lt;h2&gt;Ooops...&lt;/h2&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC127'>						<span class="s1">&#39;&lt;p&gt;It looks like tumblr is having issues - it happens to the best of us. Don\&#39;t worry it should be fixed soon!&lt;/p&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC128'>						<span class="s1">&#39;&lt;p style=&quot;display: none;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">errorTxt</span> <span class="o">+</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/p&gt;&#39;</span></div><div class='line' id='LC129'>					<span class="p">);</span></div><div class='line' id='LC130'>				<span class="p">}</span></div><div class='line' id='LC131'>			<span class="p">});</span></div><div class='line' id='LC132'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC133'>		<span class="p">},</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>		<span class="nx">handleAjaxSuccess</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tumblr_api_read</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC136'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC137'>				<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC138'>					<span class="nx">data</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">),</span></div><div class='line' id='LC139'>					<span class="nx">posts</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">,</span></div><div class='line' id='LC140'>					<span class="nx">postIterator</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>				<span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC143'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC144'>				<span class="k">if</span> <span class="p">((</span><span class="nx">tumblr_api_read</span> <span class="o">==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">tumblr_api_read</span> <span class="o">==</span> <span class="kc">null</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC145'>					<span class="nx">$this</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;tumblr-error&quot;&gt;Unable to load tumblr - its probably down...&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC146'>					<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC147'>				<span class="p">}</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>				<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">tumblr_api_read</span><span class="p">.</span><span class="nx">posts</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">post</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC150'>					<span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;addPost&#39;</span><span class="p">,</span> <span class="nx">post</span><span class="p">,</span> <span class="nx">postIterator</span><span class="p">);</span></div><div class='line' id='LC151'>					<span class="nx">postIterator</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC152'>				<span class="p">});</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>				<span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">timeago</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;abbr.timeago&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;abbr.timeago&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">).</span><span class="nx">timeago</span><span class="p">();</span></div><div class='line' id='LC156'>				<span class="p">}</span></div><div class='line' id='LC157'>				<span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fancybox</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;a.lightbox&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;a.lightbox&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">).</span><span class="nx">fancybox</span><span class="p">();</span></div><div class='line' id='LC159'>				<span class="p">}</span></div><div class='line' id='LC160'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">);</span></div><div class='line' id='LC161'>				<span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">loading</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC162'>					<span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">loading</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC163'>				<span class="p">}</span></div><div class='line' id='LC164'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">slideDown</span><span class="p">();</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>				<span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pagination</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">pagination_setup</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC167'>					<span class="nx">data</span><span class="p">.</span><span class="nx">pagination_setup</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC168'>					<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span></div><div class='line' id='LC169'>						<span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paginationOptions</span><span class="p">,</span> </div><div class='line' id='LC170'>						<span class="p">{</span></div><div class='line' id='LC171'>					        <span class="nx">items_per_page</span> <span class="o">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perPage</span><span class="p">,</span></div><div class='line' id='LC172'>					        <span class="nx">callback</span>       <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">new_page_index</span><span class="p">,</span> <span class="nx">pagination_container</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>					        	<span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">new_page_index</span><span class="p">);</span>	</div><div class='line' id='LC174'>					        <span class="p">}</span></div><div class='line' id='LC175'>						<span class="p">}</span></div><div class='line' id='LC176'>					<span class="p">);</span></div><div class='line' id='LC177'>					<span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">pagination</span><span class="p">.</span><span class="nx">pagination</span><span class="p">(</span><span class="nx">tumblr_api_read</span><span class="p">[</span><span class="s1">&#39;posts-total&#39;</span><span class="p">],</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paginationOptions</span><span class="p">);</span></div><div class='line' id='LC178'>				<span class="p">}</span></div><div class='line' id='LC179'>			<span class="p">});</span></div><div class='line' id='LC180'>		<span class="p">},</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>		<span class="nx">addPost</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">post</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC183'>			<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC184'>				<span class="nx">data</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">),</span></div><div class='line' id='LC185'>				<span class="nx">oddeven</span> <span class="o">=</span> <span class="nx">i</span><span class="o">%</span><span class="mi">2</span> <span class="o">?</span> <span class="s1">&#39;even&#39;</span> <span class="o">:</span> <span class="s1">&#39;odd&#39;</span><span class="p">,</span></div><div class='line' id='LC186'>				<span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC187'>				<span class="nx">li</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>			<span class="k">switch</span><span class="p">(</span><span class="nx">post</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>				<span class="k">case</span> <span class="s2">&quot;regular&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC191'>					<span class="kd">var</span> <span class="nx">extraClass</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;getCssTextLength&#39;</span><span class="p">,</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;regular-title&#39;</span><span class="p">]);</span></div><div class='line' id='LC192'>					<span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;title &#39;</span> <span class="o">+</span> <span class="nx">extraClass</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;regular-title&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC193'>					<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;regular-body&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC194'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div class=&quot;description&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;regular-body&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span> </div><div class='line' id='LC195'>					<span class="p">}</span></div><div class='line' id='LC196'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC197'>				<span class="p">}</span></div><div class='line' id='LC198'>				<span class="k">case</span> <span class="s2">&quot;photo&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC199'>					<span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;media&quot;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC200'>					<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photos&#39;</span><span class="p">].</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;ul class=&quot;photos&quot;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC202'>						<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photos&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">photo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC203'>							<span class="kd">var</span> <span class="nx">oddeven</span> <span class="o">=</span> <span class="nx">i</span><span class="o">%</span><span class="mi">2</span> <span class="o">?</span> <span class="s1">&#39;even&#39;</span> <span class="o">:</span> <span class="s1">&#39;odd&#39;</span><span class="p">;</span></div><div class='line' id='LC204'>							<span class="kd">var</span> <span class="nx">alt</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC205'>							<span class="k">if</span><span class="p">(</span><span class="nx">photo</span><span class="p">[</span><span class="s1">&#39;photo-caption&#39;</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>								<span class="nx">alt</span> <span class="o">=</span> <span class="s1">&#39; alt=&quot;&#39;</span> <span class="o">+</span> <span class="nx">photo</span><span class="p">[</span><span class="s1">&#39;photo-caption&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span> </div><div class='line' id='LC207'>							<span class="p">}</span></div><div class='line' id='LC208'>							<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;li class=&quot;&#39;</span> <span class="o">+</span> <span class="nx">oddeven</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC209'>									<span class="s1">&#39;&lt;a href=&quot;&#39;</span> <span class="o">+</span> <span class="nx">photo</span><span class="p">[</span><span class="s1">&#39;photo-url-&#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">photoLightboxSize</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot; rel=&quot;post-&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;id&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot; class=&quot;lightbox&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC210'>										<span class="s1">&#39;&lt;img src=&quot;&#39;</span> <span class="o">+</span> <span class="nx">photo</span><span class="p">[</span><span class="s1">&#39;photo-url-&#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">photoThumbSize</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">alt</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC211'>									<span class="s1">&#39;&lt;/a&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC212'>								<span class="s1">&#39;&lt;/li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC213'>						<span class="p">});</span></div><div class='line' id='LC214'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/ul&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC215'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC216'>						<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photo-link-url&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC217'>							<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;a href=&quot;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photo-link-url&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC218'>						<span class="p">}</span></div><div class='line' id='LC219'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;img alt=&quot;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photo-caption&#39;</span><span class="p">]).</span><span class="nx">text</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&quot; src=&quot;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photo-url-&#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">photoSize</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC220'>						<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photo-link-url&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC221'>							<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/a&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC222'>						<span class="p">}</span></div><div class='line' id='LC223'>					<span class="p">}</span></div><div class='line' id='LC224'>					<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photo-caption&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC225'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div class=&quot;description&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;photo-caption&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC226'>					<span class="p">}</span></div><div class='line' id='LC227'>					<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC228'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC229'>				<span class="p">}</span></div><div class='line' id='LC230'>				<span class="k">case</span> <span class="s2">&quot;link&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC231'>					<span class="kd">var</span> <span class="nx">extraClass</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;getCssTextLength&#39;</span><span class="p">,</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;link-text&#39;</span><span class="p">]);</span></div><div class='line' id='LC232'>					<span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;link &#39;</span> <span class="o">+</span> <span class="nx">extraClass</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;a href=&quot;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;link-url&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;link-text&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC233'>					<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s2">&quot;link-description&quot;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC234'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div class=&quot;description&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;link-description&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC235'>					<span class="p">}</span></div><div class='line' id='LC236'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC237'>				<span class="p">}</span></div><div class='line' id='LC238'>				<span class="k">case</span> <span class="s2">&quot;quote&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC239'>					<span class="kd">var</span> <span class="nx">extraClass</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;getCssTextLength&#39;</span><span class="p">,</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;quote-text&#39;</span><span class="p">]);</span></div><div class='line' id='LC240'>					<span class="nx">body</span> <span class="o">=</span> </div><div class='line' id='LC241'>	                    <span class="s1">&#39;&lt;div class=&quot;quote&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC242'>	                        <span class="s1">&#39;&lt;div class=&quot;quote-text &#39;</span> <span class="o">+</span> <span class="nx">extraClass</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;quote-text&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC243'>							<span class="s1">&#39;&lt;div class=&quot;source&quot;&gt;&amp;mdash; &#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;quote-source&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC244'>	                    <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC245'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC246'>				<span class="p">}</span></div><div class='line' id='LC247'>				<span class="k">case</span> <span class="s2">&quot;conversation&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC248'>					<span class="kd">var</span> <span class="nx">extraClass</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">tumblr</span><span class="p">(</span><span class="s1">&#39;getCssTextLength&#39;</span><span class="p">,</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;conversation-title&#39;</span><span class="p">]);</span></div><div class='line' id='LC249'>					<span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;caption &#39;</span> <span class="o">+</span> <span class="nx">extraClass</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;conversation-title&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC250'>						<span class="s1">&#39;&lt;div class=&quot;conversation&quot;&gt;&#39;</span> <span class="o">+</span> <span class="s1">&#39;&lt;ul&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>					<span class="kd">var</span> <span class="nx">users</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC253'>					<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;conversation&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC254'>						<span class="k">if</span><span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">users</span><span class="p">,</span> <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">])</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>							<span class="nx">users</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">]);</span></div><div class='line' id='LC256'>						<span class="p">}</span></div><div class='line' id='LC257'>						<span class="kd">var</span> <span class="nx">user</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">users</span><span class="p">,</span> <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">])</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC258'>						<span class="nx">body</span> <span class="o">+=</span> </div><div class='line' id='LC259'>							<span class="s1">&#39;&lt;li class=&quot;odd&quot;&gt;&#39;</span> <span class="o">+</span> </div><div class='line' id='LC260'>								<span class="s1">&#39;&lt;span class=&quot;label user-&#39;</span> <span class="o">+</span> <span class="nx">user</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;label&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/span&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC261'>								<span class="s1">&#39;&lt;span class=&quot;phrase&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">item</span><span class="p">[</span><span class="s1">&#39;phrase&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/span&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC262'>	                        <span class="s1">&#39;&lt;/li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC263'>					<span class="p">});</span></div><div class='line' id='LC264'>					<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC265'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC266'>				<span class="p">}</span></div><div class='line' id='LC267'>				<span class="k">case</span> <span class="s2">&quot;audio&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC268'>					<span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;media&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;audio-player&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC269'>					<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;audio-caption&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC270'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div class=&quot;description&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;audio-caption&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span>	</div><div class='line' id='LC271'>					<span class="p">}</span></div><div class='line' id='LC272'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC273'>				<span class="p">}</span></div><div class='line' id='LC274'>				<span class="k">case</span> <span class="s2">&quot;video&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC275'>					<span class="kd">var</span> <span class="nx">player</span> <span class="o">=</span> <span class="s1">&#39;video-player&#39;</span><span class="p">;</span></div><div class='line' id='LC276'>					<span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">videoSize</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC277'>						<span class="nx">player</span> <span class="o">=</span> <span class="s1">&#39;video-player-&#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">videoSize</span><span class="p">;</span></div><div class='line' id='LC278'>					<span class="p">}</span></div><div class='line' id='LC279'>					<span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;media&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="nx">player</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC280'>					<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">[</span><span class="s1">&#39;video-caption&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC281'>						<span class="nx">body</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div class=&quot;description&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;video-caption&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC282'>					<span class="p">}</span></div><div class='line' id='LC283'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC284'>				<span class="p">}</span></div><div class='line' id='LC285'>				<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC286'>					<span class="k">break</span><span class="p">;</span>			</div><div class='line' id='LC287'>			<span class="p">}</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'>			<span class="c1">// Add the li to the posts stack.</span></div><div class='line' id='LC290'>			<span class="nx">li</span> <span class="o">=</span> </div><div class='line' id='LC291'>				<span class="s1">&#39;&lt;li class=&quot;tumblr-post tumblr-post-&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">.</span><span class="nx">type</span> <span class="o">+</span> <span class="s1">&#39; post-id-&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">.</span><span class="nx">id</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">oddeven</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC292'>					<span class="s1">&#39;&lt;div class=&quot;post-body&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC293'>		            	<span class="nx">body</span> <span class="o">+</span></div><div class='line' id='LC294'>		            <span class="s1">&#39;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC295'>					<span class="s1">&#39;&lt;div class=&quot;post-footer&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<span class="s1">&#39;&lt;div class=&quot;date&quot;&gt;&lt;span class=&quot;posted&quot;&gt;Posted&lt;/span&gt; &lt;abbr class=&quot;timeago&quot; title=&quot;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;date&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;date&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&lt;/abbr&gt;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC297'>						<span class="s1">&#39;&lt;div class=&quot;permalink&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC298'>							<span class="s1">&#39;&lt;a href=&quot;&#39;</span> <span class="o">+</span> <span class="nx">post</span><span class="p">[</span><span class="s1">&#39;url-with-slug&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot; class=&quot;permalink&quot; target=&quot;_blank&quot;&gt;&lt;span class=&quot;permalink-icon&quot;&gt;&amp;#167;&lt;/span&gt; &lt;span class=&quot;permalink-text&quot;&gt;Permalink&lt;/span&gt;&lt;/a&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC299'>	                	<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>			<span class="k">if</span><span class="p">(</span><span class="nx">post</span><span class="p">.</span><span class="nx">tags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>				<span class="nx">li</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div class=&quot;tags&quot;&gt;&lt;span class=&quot;tagged&quot;&gt;Tagged &lt;/span&gt; &lt;ul&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC303'>				<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">post</span><span class="p">.</span><span class="nx">tags</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">tag</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC304'>					<span class="kd">var</span> <span class="nx">tag_comma</span> <span class="o">=</span> <span class="s1">&#39;&lt;span class=&quot;tag-commas&quot;&gt;, &lt;/span&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC305'>					<span class="kd">var</span> <span class="nx">extraClass</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC306'>					<span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="nx">post</span><span class="p">.</span><span class="nx">tags</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC307'>						<span class="nx">extraClass</span> <span class="o">=</span> <span class="s1">&#39;last&#39;</span><span class="p">;</span></div><div class='line' id='LC308'>						<span class="nx">tag_comma</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC309'>					<span class="p">}</span></div><div class='line' id='LC310'>					<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>						<span class="nx">extraClass</span> <span class="o">=</span> <span class="s1">&#39;first&#39;</span><span class="p">;</span></div><div class='line' id='LC312'>					<span class="p">}</span></div><div class='line' id='LC313'>					<span class="nx">li</span> <span class="o">+=</span> <span class="s1">&#39;&lt;li class=&quot;&#39;</span> <span class="o">+</span> <span class="nx">extraClass</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;a href=&quot;&#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39;/tagged/&#39;</span> <span class="o">+</span> <span class="nx">tag</span> <span class="o">+</span><span class="s1">&#39;&quot; target=&quot;_blank&quot;&gt;#&#39;</span> <span class="o">+</span> <span class="nx">tag</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&#39;</span> <span class="o">+</span> <span class="nx">tag_comma</span> <span class="o">+</span> <span class="s1">&#39;&lt;/li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC314'>				<span class="p">});</span></div><div class='line' id='LC315'>				<span class="nx">li</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/ul&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC316'>			<span class="p">}</span></div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'>			<span class="nx">li</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC319'>		        <span class="s1">&#39;&lt;/li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'>			<span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">li</span><span class="p">);</span></div><div class='line' id='LC322'>		<span class="p">},</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>		<span class="nx">getCssTextLength</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>			<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC326'>				<span class="nx">data</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">),</span></div><div class='line' id='LC327'>				<span class="nx">shortLength</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">shortLength</span><span class="p">,</span></div><div class='line' id='LC328'>				<span class="nx">mediumLength</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">mediumLength</span><span class="p">;</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>			<span class="kd">var</span> <span class="nx">extraClass</span> <span class="o">=</span> <span class="s1">&#39;long&#39;</span><span class="p">;</span></div><div class='line' id='LC331'>			<span class="k">if</span><span class="p">(</span><span class="nx">text</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">text</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="nx">shortLength</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>				<span class="nx">extraClass</span> <span class="o">=</span> <span class="s1">&#39;short&#39;</span><span class="p">;</span></div><div class='line' id='LC333'>			<span class="p">}</span></div><div class='line' id='LC334'>			<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">text</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">text</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="nx">mediumLength</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC335'>				<span class="nx">extraClass</span> <span class="o">=</span> <span class="s1">&#39;medium&#39;</span><span class="p">;</span></div><div class='line' id='LC336'>			<span class="p">}</span></div><div class='line' id='LC337'>			<span class="k">return</span> <span class="nx">extraClass</span><span class="p">;</span></div><div class='line' id='LC338'>		<span class="p">},</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>		<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC341'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC342'>				<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC343'>					<span class="nx">data</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">);</span></div><div class='line' id='LC344'>				<span class="c1">// Namespacing FTW</span></div><div class='line' id='LC345'>				<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;.tumblr&#39;</span><span class="p">);</span></div><div class='line' id='LC346'>				<span class="nx">data</span><span class="p">.</span><span class="nx">posts</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC347'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">removeData</span><span class="p">(</span><span class="s1">&#39;tumblr&#39;</span><span class="p">);</span></div><div class='line' id='LC348'>			<span class="p">});</span></div><div class='line' id='LC349'>		<span class="p">},</span></div><div class='line' id='LC350'>	<span class="p">};</span></div><div class='line' id='LC351'><br/></div><div class='line' id='LC352'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tumblr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">method</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="c1">// Method calling logic</span></div><div class='line' id='LC354'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">methods</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'>			<span class="k">return</span> <span class="nx">methods</span><span class="p">[</span> <span class="nx">method</span> <span class="p">].</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span> <span class="p">));</span></div><div class='line' id='LC356'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="o">!</span> <span class="nx">method</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC357'>			<span class="k">return</span> <span class="nx">methods</span><span class="p">.</span><span class="nx">init</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC358'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC359'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="s1">&#39;Method &#39;</span> <span class="o">+</span>  <span class="nx">method</span> <span class="o">+</span> <span class="s1">&#39; does not exist on jQuery.tooltip&#39;</span> <span class="p">);</span></div><div class='line' id='LC360'>		<span class="p">}</span></div><div class='line' id='LC361'>	<span class="p">};</span></div><div class='line' id='LC362'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/alexhayes/jquery-tumblr/tree-list/64a8329b343da153b1636cbc37da4c91153bb5bf" data-blob-url-prefix="/alexhayes/jquery-tumblr/blob/64a8329b343da153b1636cbc37da4c91153bb5bf">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1338956357" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.19671s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1338956357" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1338956357" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.19879' data-host='fe1'></span>
    
  </body>
</html>

