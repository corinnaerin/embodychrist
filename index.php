<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Embody Christ Fellowship</title>
    <link rel="stylesheet" href="/css/liteaccordion.css">
    <!--[if lt IE 9]>
    <script>
        document.createElement('figure');
        document.createElement('figcaption');           
    </script>
    <![endif]-->
    <style>
    #accordian {
        font: 14px/24px 'Lucida Sans Unicode', 'Bitstream Vera Sans',
            'Trebuchet Unicode MS', 'Lucida Grande', Verdana, Helvetica,
            sans-serif;
        color: #333;
        margin: auto;
    }
    
    figure {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0
    }
    
    figcaption {
        padding: 10px 15px;
        position: absolute;
        bottom: 20px;
        right: 30px;
        z-index: 3;
        background: black;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        width: 300px;
    }
    </style>
    <?php include "template/header.php" ?>
</head>
<body>
<section id="content">
    <h2 id="title">Welcome to Embody Christ Fellowship</h2>
    Embody is a new church and has found a permanent location not far from you (2014 South Shore Dr.). 
    We are a church where you don't have to believe to belong. 
    Everyone is at a different place in faith, and we are a fellowship of people who want to seek after 
    the life that Jesus taught about. We don't have all the answers, but we'll seek them out together.<br><br>
    
    If you're looking for an authentic, relevant place to find friendship; and if you want to go deeper 
    as we look at the life and teachings of Jesus...be our guest. We are just like our neighborhood: 
    singles, married, divorced, young, old, alcoholics, soccer moms, Christians, agnostics, atheists, 
    jobless, enthusiastic, depressed... we are regular people, so...no judgment here...just coffee 
    and seeking what God wants to speak into our lives.<br><br>
    
    <div id="accordian">
        <ol>
            <li>
                <h2><span>An Authentic Experience</span></h2>
                <div>
                    <figure>
                        <img src="/images/worship.jpg">
                        <figcaption>
                            Worship doesn't have to be boring. In fact, it is our laidback and creative style of worship 
                            that we use to build an atmosphere that welcomes God's presence. At Embody, we want everyone to 
                            connect to God in their own personal way.
                        </figcaption>
                    </figure>
                </div>
            </li>
            <li>
                <h2><span>Helping To Grow Our Community</span></h2>
                <div>
                    <figure>
                        <img src="/images/community.jpg">
                        <figcaption>
                            We want to see our community prosper! We believe God loves our community 
                            and so do we. We seek the peace and prosperity of our community so that justice, love 
                            and mercy reign.
                        </figcaption>
                    </figure>
                </div>
            </li>
            <li>
                <h2><span>Where real life happens together</span></h2>
                <div>
                    <figure>
                        <img src="/images/life.jpg">
                        <figcaption>
                            We all have our struggles. At Embody, you don't have to go through them by yourself. 
                            Visit our church, and connect to others in a real, authentic way. After all, shouldn't 
                            your "home" be where you feel comfortable?
                        </figcaption>
                    </figure>
                </div>
            </li>
        </ol>
        <noscript>
            <p>Please enable JavaScript to get the full experience.</p>
        </noscript>
    </div>
</section>
<script src="/js/liteaccordion.jquery.js"></script>
<script src="/js/jquery.easing.1.3.js"></script>
<script type="text/javascript">
(function ($) {
    $('#accordian').liteAccordion({
        responsive: true,
        theme:'stitch',
        easing:'easeOutBack',
        rounded: true,
        autoPlay:true,
        onTriggerSlide : function() {
            index = this.closest('li').index();
            $('figcaption').filter(function() {
                return $(this).closest('li').index() != index
            }).fadeOut();
        },
        onSlideAnimComplete : function() {    
            this.find('figcaption').fadeIn();
        },
        pauseOnHover:true,
        activateOn: 'mouseover',
        autoScaleImages : true
    }).find('figcaption:first').show().end().find('figcaption:not(:first)').hide();
})(jQuery);
</script>
<?php include "template/footer.php" ?>
</body>
</html>