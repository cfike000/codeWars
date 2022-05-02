function removeUrlAnchor(url){
  return url.split('').includes('#') ? 
  url.split('').slice(0,url.split('').indexOf('#')).join('') :
  url
}
