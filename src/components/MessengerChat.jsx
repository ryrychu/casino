import React, { useEffect } from 'react';

const fbSDKUrl = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';

const loadFbSdk = () => {
  // check if the SDK is already loaded
  if (window.FB) {
    window.FB.XFBML.parse();
    return;
  }
  // load the SDK
  window.fbAsyncInit = function() {
    window.FB.init({
      xfbml: true,
      version: 'v11.0',
    });
    window.FB.Event.subscribe('customerchat.dialogShow', function() {
      console.log('Customer chat dialog has been opened');
    });
    window.FB.Event.subscribe('customerchat.dialogHide', function() {
      console.log('Customer chat dialog has been closed');
    });
    window.FB.XFBML.parse();
  };
  const js = document.createElement('script');
  js.src = fbSDKUrl;
  js.async = true;
  js.defer = true;
  document.head.appendChild(js);
};

const MessengerChat = () => {
  useEffect(() => {
    loadFbSdk();
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id="140106562523408"
      ></div>
    </>
  );
};

export default MessengerChat;