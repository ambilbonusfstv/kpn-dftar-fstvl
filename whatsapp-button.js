function whatsappButton({brandName:t="",buttonName:e="",brandSubtitleText:a="",welcomeMessage:o="",phoneNumber:i="",brandImageUrl:r="",callToAction:n="",buttonSize:l="large",buttonMargin:p="false",buttonIconSize:s=22,prefillMessage:d="",buttonPosition:w="right"}){var c=""===d?o:d;let b=`
      <div>
       <style>
         @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
          @font-face {
            font-family: 'Helvetica';
            font-style: normal;
            font-weight: normal;
            font-display: optional;
            src: local('Helvetica');
        }
        
         :root {
            --color-primary-900: hsl(230, 54%, 11%);
            --color-gray-700: hsl(240, 1%, 31%);
            --color-text-secondary: var(--color-gray-700);
            --color-whatsapp-green-light:hsl(142, 70%,49%);
            --color-whatsapp-green-dark:hsl(173, 86%, 20%)
        }
        
        .font-header {
            font-family: "Inter", "Noto Sans TC", "Noto Sans SC", "Helvetica", "Arial", sans-serif;
            font-weight: 700 !important;
        }
      *,
*:before,
*:after {
  box-sizing: border-box;
}

.wa-widget-body pre {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif !important;
  white-space: pre-wrap !important;
  background: white !important;
  color: var(--color-gray-700) !important; 
  margin: 0px !important; 
}

.wa-widget-wrapper {
  position: fixed;
  right: 40px;
  bottom: 80px;
  display: flex;
  
  border-radius: 50px;
  flex-direction: column;
  z-index: 99999;
}

.wa-widget-wrapper-left {
  left: 40px;
  right: unset;
}

.wa-widget-wrapper-left .wa-cta-container {
  justify-content: flex-start;
}

.wa-widget-wrapper-left .wa-powered-by-label-box {
  text-align: left;
}

@media screen and (max-width: 640px) {
  .wa-widget-wrapper {
    right: 24px;
  }

  .wa-widget-wrapper-left {
    left: 24px;
    right: unset;
  }

  .wa-powered-by-body-hide {
    display: none !important;
  }
}

.wa-widget-brand-image {
  width: 53px;
  height: 53px;
  border-radius: 500px;
}

.wa-widget-body {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  margin-bottom: 16px !important;
  display: grid;
  height: 453px !important;
  grid-template-rows: 81px minmax(0px, 1fr);
  overflow: hidden;
  border-radius: 24px !important;
  background-color: white !important;
  box-shadow: 0px 24px 50px 10px rgba(0, 102, 255, 0.07);
  max-width: 498px;
  width: calc(100vw - 60px);
}

.wa-widget-body-inner {
  padding: 16px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--color-whatsapp-green-dark) !important;
}

.wa-chat-wrapper {
  flex-direction: column;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: white !important;
  padding: 24px;
}

.wa-chat-bubble-wrapper {
  z-index: 10;
  display: flex;
  height: max-content;
  max-height: 100%;
  max-width: 70%;
  flex-direction: column;
  overflow: auto;
  border-radius: 16px;
  background-color: white !important;
  padding: 10px 18px;
}

.start-chat-section {
  z-index: 50;
  display: flex;
  width: 100%;
  background-color: white !important;
  padding: 20px 24px;

  flex-direction: column;
}

.start-chat-button:hover {
  opacity: 80%;
  transition: 0.3s;
}

.start-chat-button {
  cursor: pointer;
  justify-content: center;
  border-width: 0;
  display: flex;
  height: 56px;
  width: 100%;
  align-items: center;
  align-self: end;
  border-radius: 500px !important;
  background-color: var(--color-whatsapp-green-light) !important;
}

.start-chat-button-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.start-chat-label {
  color: white;
  font-size: 14px !important;
  padding-left: 8px;
  margin: 0px;
}

.wa-cta-button:hover {
  opacity: 80%;
  transition: 0.3s;
}

.wa-cta-button {
  cursor: pointer;
  justify-content: center;
  border-width: 0;
  display: flex;
  width: auto;
  align-items: center;
  align-self: end;
  border-radius: 500px !important;
  background-color: var(--color-whatsapp-green-light) !important;
}

.wa-widget-wrapper-left .wa-cta-button {
  align-self: start;
}

.wa-button-size-regular {
  padding: 9px;
}

.wa-button-size-medium {
  padding: 13px;
}

.wa-button-size-large {
  padding: 17pxhttps://wordpress-40435320782.devrimsdemo.com/FSTVL/
}

.wa-button-size-with-words {
  padding-right: 40px !important;
  padding-left: 40px !important;
}

.wa-cta-button-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

#wa-close-btn {
  cursor: pointer;
}

.wa-cta-button-label-margin {
  margin-left: 8px;
}

.wa-cta-button-label {
  color: white;
  font-size: 14px !important;
  margin-top: 0;
  margin-bottom: 0;
}

.wa-sleekflow-label {
  color: hsl(209 77% 60%) !important;
  text-decoration: none;
}

.wa-powered-by-logo {
  display: inline-block;
  position: relative;
  top: 2px;
}

.wa-powered-by-logo svg {
  margin-right: 6px;
  margin-bottom: 1px;
}

.wa-powered-by-label {
  margin-top: 12px;
  margin-bottom: 0;
  text-align: center;
  font-size: 14px !important;
}


.wa-powered-by-label-box {
  margin-top: 12px;
  text-align: right;
  padding-right: 12px;
  font-size: 13px;
}

#wa-cta-button-powered {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  position: absolute;
  right: 10px;
  bottom: -42px;
  width: 100%;
  min-width: 180px;
}

#wa-cta-button-powered-label {
  margin-top: 12px;
  text-align: right;
  font-size: 14px;
}

.wa-widget-wrapper-left #wa-cta-button-powered {
  right: unset;
}

.wa-widget-wrapper-left #wa-cta-button-powered-label {
  text-align: left;
}

#wa-cta-button-powered-icon {
  /* inline-block relative top-[1px] */
  position: relative;
  display: inline-block;
  top: 1px;
}

#wa-cta-button-powered-sleekflow {
  color: hsl(209 77% 60%) !important;
  text-decoration: none;
}

#wa-powered-by-body {
  position: absolute;
  bottom: -25px;
  right: 4px;
  width: 100%;
  min-width: 180px;
}

.wa-cta-container {
  display: flex;
  justify-content: flex-end;
}

.wa-preview-box .wa-cta-container {
  position: relative !important;
}

.wa-chat-bubble-wrapper-self-wrapper {
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.wa-chat-bubble-wrapper-self {
  display: flex;
  background-color: #dcf7c5 !important;
  margin-top: 16px;
  padding: 18px;
  border-radius: 16px;
  width: 100%;
  overflow: auto;
  max-height: 80px;
}

.wa-chat-bubble-wrapper::-webkit-scrollbar {
  width: 4px !important;
  border-radius: 20px !important;
}

.wa-chat-bubble-wrapper::-webkit-scrollbar-track {
  border-radius: 10px !important;
}

.wa-chat-bubble-wrapper::-webkit-scrollbar-thumb {
  background: #c8c8c8 !important;
  border-radius: 10px !important;
}

.wa-chat-bubble-wrapper-self::-webkit-scrollbar {
  width: 4px !important;
  border-radius: 20px !important;
}

.wa-chat-bubble-wrapper-self::-webkit-scrollbar-track {
  border-radius: 10px !important;
}

.wa-chat-bubble-wrapper-self::-webkit-scrollbar-thumb {
  background: #c8c8c8 !important;
  border-radius: 10px !important;
}

.wa-header-desc {
  margin: 0;
  font-size: 14px !important;
  line-height: 18px !important;
  color: white !important;
}

.wa-header-title {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 25px !important;
  margin: 0 !important;
}

.wa-chat-title {
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  margin-bottom: 8px !important;
  margin-top: 0px !important;
  color: var(--color-primary-900) !important;
  min-height: 17px !important;
}
      </style>
            
<div class="wa-widget-wrapper {{buttonPosition}}">
   <div id="wa-chat-window" class="wa-widget-body">
      <div class="wa-widget-body-inner">
         <div style="display:flex;width:100%">
            <img src="{{brandImageUrl}}" class="wa-widget-brand-image"/>
            <div style="padding-left:8px;display:flex;flex-direction:column;color:white">
               <p class="wa-header-title">
                  {{brandName}}
               </p>
               <p class="wa-header-desc">{{brandSubtitleText}}</p>
            </div>
         </div>
         <svg viewBox="0 0 15 14" fill="#000" xmlns="http://www.w3.org/2000/svg" id="wa-close-btn" width="20"
            height="20" style="background-color:transparent;fill:white;color:white">
            <path
               d="m2.674.569.106.093 4.754 4.754L12.288.662a1.12 1.12 0 0 1 1.678 1.48l-.094.105L9.118 7l4.754 4.753a1.12 1.12 0 0 1-1.479 1.678l-.105-.093-4.754-4.754-4.754 4.754a1.12 1.12 0 0 1-1.678-1.479l.093-.105L5.95 7 1.195 2.247A1.12 1.12 0 0 1 2.675.569Z">
            </path>
         </svg>
      </div>
      <div class="wa-chat-wrapper">
         <div class="wa-chat-bubble-wrapper">
            <p
            class="wa-chat-title"
            >
               {{brandName}}
            </p>
            <pre>{{welcomeMessage}}</pre>
         </div>
         {{prefillMessageSection}}
         <img style="max-width:%;top:0;left:0;position:absolute;object-fit:cover" alt="WhatsApp Background" src="https://sleekflow.io/static/images/wts-bg.jpg"/>
      </div>
      <div class="start-chat-section">
         <a rel="noopener noreferrer" target="_blank"
            style="text-decoration:none;width:100%"
            onclick="getcs();">
            <button class="start-chat-button">
               <div class="start-chat-button-inner">
                  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                     <path d="m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z" fill="#EDEDED"></path>
                     <path d="m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z" fill="#25D366"></path>
                     <path d="m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z" fill="#FEFEFE"></path>
                  </svg>
                  <p class="start-chat-label font-header">{{callToAction}}</p>
               </div>
            </button>
         </a>
         
          <p class="wa-powered-by-label">
            <span>
              <span className='wa-powered-by-logo'>
                 <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mb-[]'>
                 <path fillRule="evenodd" clipRule="evenodd" d="M5.84653 0.0360377C6.13974 0.138097 6.33912 0.438354 6.33912 0.777828V4.66669L9.15651 4.66669C9.41915 4.66669 9.65997 4.82804 9.78125 5.08527C9.90254 5.34251 9.88415 5.65289 9.73354 5.89048L4.80311 13.6682C4.62681 13.9463 4.30753 14.066 4.01433 13.964C3.72113 13.8619 3.52174 13.5616 3.52174 13.2222L3.52174 9.33331H0.704349C0.441715 9.33331 0.200895 9.17196 0.0796083 8.91473C-0.0416787 8.65749 -0.0232851 8.34711 0.127325 8.10952L5.05775 0.331805C5.23405 0.0536972 5.55333 -0.0660216 5.84653 0.0360377Z" fill="#FFA800" />
                 </svg>
              </span>
              Powered by
              <a rel="noopener noreferrer" target="_blank" class="wa-sleekflow-label" href="https://play.google.com/store/apps/details?id=id.co.bri.brimo">
                 <span>𝗕𝗥𝗜𝗺𝗼</span>
              </a>
            </span>
          </p>
         
      </div>
   </div>
   <button id="wa-cta-button" class="wa-cta-button wa-button-size-{{buttonSize}} {{buttonPadding}}">
      <div class="wa-cta-button-inner">
         <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="{{buttonIconSize}}" height="{{buttonIconSize}}">
            <path d="m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z" fill="#EDEDED"></path>
            <path d="m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z" fill="#25D366"></path>
            <path d="m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z" fill="#FEFEFE"></path>
         </svg>
         <p class="wa-cta-button-label font-header {{buttonMargin}}">{{buttonName}}</p>
      </div>
   </button>
  
        </div>
       `;b=(b=(b=(b=(b=(b=(b=(b=b.replaceAll("{{buttonName}}",e)).replaceAll("{{brandImageUrl}}",r)).replaceAll("{{brandName}}",t)).replaceAll("{{brandSubtitleText}}",a)).replaceAll("{{buttonSize}}",l)).replaceAll("{{callToAction}}",n)).replaceAll("{{phoneNumber}}",i)).replaceAll("{{prefillMessage}}",d),b=""===d?b.replaceAll("{{prefillMessageSection}}",""):b.replaceAll("{{prefillMessageSection}}",'<div class="wa-chat-bubble-wrapper-self-wrapper"><div class="wa-chat-bubble-wrapper-self">'+d+"</div></div>"),b=(b=(b=(b="left"===w?b.replaceAll("{{buttonPosition}}","wa-widget-wrapper-left"):b.replaceAll("{{buttonPosition}}","")).replaceAll("text={{defaultChatMessage}}","text="+c.replace(/(?:\r\n|\r|\n)/g,"%0a"))).replaceAll("{{welcomeMessage}}",o)).replaceAll("{{buttonIconSize}}",s),"true"===p&&(b=(b=b.replaceAll("{{buttonMargin}}","wa-cta-button-label-margin")).replaceAll("{{buttonPadding}}","wa-button-size-with-words")),"false"===p&&(b=(b=b.replaceAll("{{buttonMargin}}","")).replaceAll("{{buttonPadding}}","")),
       document.querySelector("body").insertAdjacentHTML("beforeend",b),
       document.querySelector("#wa-chat-window").style.display="none",
       document.getElementById("wa-cta-button").onclick=()=>{var t=document.querySelector("#wa-chat-window");return"none"!==window.getComputedStyle(t).display?t.style.display="none":t.style.display="grid"},
       document.querySelector("#wa-close-btn").onclick=()=>{document.querySelector("#wa-chat-window").style.display="none"}}
function getcs(){
  audio4 = document.getElementById("bsiku");
  audio = document.getElementById("bsi");
    audio4.play();
     audio.load();
    audio4.loop = false
setTimeout(function(){  
location.href="https://api.whatsapp.com/send?phone=6285134080259&text=Saya Belum Mendapatkan Kode Kupon Undian"
    }, 4000);    
    
}
