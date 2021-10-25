import React, { useEffect } from 'react';
import $ from 'jquery';

const Preloader = () => {

  useEffect(() => {
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(500).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  }, [])

  return <div id="preloader"></div>;

}

export default Preloader;



