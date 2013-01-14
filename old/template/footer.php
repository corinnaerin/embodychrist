<script type="text/javascript">
(function($) {
    var $map = $('#map');
    $('#address')
        .on('mouseover', function() {
            $map.fadeIn();
        })
        .on('mouseout', function() {
            $map.fadeOut();
        });
})(jQuery);
</script>
</body>
</html>