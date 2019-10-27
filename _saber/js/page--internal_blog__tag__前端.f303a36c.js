(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{355:function(e,t,a){"use strict";a.r(t);var n=a(0),i=function(e){var t,n,i,o,s,p,g,r,l,c=(t=void 0,n="前端",i="post",o={},s=new Date(1572143188283),p={},g="markdown",r={},l="2019-05-01 18:14:40",o.internal=t,o.contentType="default",o.isTagPage=!0,o.layout="tag",o.permalink="/blog/tag/前端",o.slug=n,o.createdAt=s,o.updatedAt=s,o.posts=[p,r],o.pagination={hasPrev:!1,hasNext:!1,total:1,current:1,prevLink:"/blog/tag/前端/page/2",nextLink:t},o.tag=n,o.assets={},o.attributes=o,o.content=t,p.internal=t,p.contentType=g,p.slug="better-lazyload-implementation-with-responsive-images",p.content=t,p.layout=i,p.title="结合响应式图片实现更好的图片懒加载方案",p.keywords="lazyload,responsive images,图片懒加载,按需延迟加载,响应式图片,前端性能优化",p.description="作为在网页性能调优方面常被使用的技巧之一，懒加载（LazyLoad）或者说延迟加载是在谈 及「前端性能优化」话题时不得不说的一项技术。懒加载已经不局限于单一的图片懒加载， 视频、音频等其它媒体资源，甚至组件化 Vue WebComponent 等都已纳入懒加载优化当中。 本文探讨了利用 srcset 属性的特性，实现一种相对完美的图片懒加载方案。既能支持响应 式图片 Responsive Images，又能完好的实现图片按需加载。",p.date="2019-07-24 15:53:00",p.updated="2019-07-24 16:33:00",p.assets={cover:a(44)},p.categories=["技术"],p.tags=[n,"前端性能优化"],p.markdownHeadings=[{text:"原理",slug:"原理",level:2},{text:"问题",slug:"问题",level:2},{text:"改进",slug:"改进",level:2},{text:"后记",slug:"后记",level:2},{text:"参考",slug:"参考",level:2}],p.excerpt='<figure data-type="image"><saber-image src="../_assets/uploads/2019/07/20190724005.jpg" alt="头图（图源：Unsplash@emilep）"></saber-image><figcaption>头图（图源：<a href="https://unsplash.com/photos/xrVDYZRGdw4">Unsplash@emilep</a>）</figcaption></figure>\n<p>作为在网页性能调优方面常被使用的技巧之一，<strong>懒加载</strong>或者说延迟加载是在谈及「前端性能优化」话题时不得不说的一项技术。</p>\n',p.createdAt=new Date(156395478e4),p.updatedAt=new Date(156395718e4),p.type=i,p.permalink="/blog/2019/07/better-lazyload-implementation-with-responsive-images",p.attributes=p,r.internal=t,r.contentType=g,r.slug="macos-mojave-dark-mode-in-css",r.content=t,r.layout=i,r.title="利用 CSS 媒体查询让网页配色跟随 macOS 深色模式",r.keywords="CSS,media queries,macos dark mode",r.description="苹果公司的操作系统 macOS 从 10.14 Mojave 版本开始，户提供了深色模式（Dark Mode） 的外观。本文介绍利用 CSS 媒体查询（media queries）中的 prefers-color-scheme 媒体特征（media feature）做到让网页跟随 macOS Mojave 的黑暗模式进行配色自动切换。",r.date=l,r.updated=l,r.assets={cover:a(45)},r.categories=["技术"],r.tags=[n],r.markdownHeadings=[],r.excerpt='<p>苹果公司的操作系统 macOS 从 10.14 Mojave 版本开始，为用户提供了<a href="https://www.apple.com/cn/macos/mojave/">深色模式</a>的可选外观。用户可以在系统中的通用设置里选择启用深色模式，整个系统的界面会全局变为暗色调。对于夜间使用场景而言，深色模式的界面可能会显得更加友好，也更能让用户集中注意力。</p>\n',r.createdAt=new Date(155670568e4),r.updatedAt=new Date(155670568e4),r.type=i,r.permalink="/blog/2019/05/macos-mojave-dark-mode-in-css",r.attributes=r,o),d=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=c}].concat(d);["layout","transition"].forEach((function(t){var a=e.options.PageComponent;a&&(e.options[t]=a[t]),void 0===e.options[t]&&(e.options[t]=c[t])})),e.options.name="page-wrapper-"+c.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("layout-manager")}),[],!1,null,null,null);"function"==typeof i&&i(o);t.default=o.exports},44:function(e,t,a){e.exports={srcSet:a.p+"images/20190724000-45e2a08e.png 600w,"+a.p+"images/20190724000-7770cdc2.png 480w",images:[{path:a.p+"images/20190724000-45e2a08e.png",width:600,height:450},{path:a.p+"images/20190724000-7770cdc2.png",width:480,height:360}],src:a.p+"images/20190724000-45e2a08e.png",toString:function(){return a.p+"images/20190724000-45e2a08e.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAADiUlEQVR4Ac3B24tVZRjA4d/7rm9/a+057M2MOlboVKTeWNkYXkVkdrjsviDooiLo3+gfCIJuo8sgiAjLBBFSGsfoYKKZ4yk1G2tmnMOetfda6/vemgshKGjPGoP9PJIvd4wBpgw4ZcApA04ZcMqAc9wDZkYVAt0LF5Gix/C+xxFV7gVHTWaGmWGhIhisXr3G0nvvgxn21huM7HsMEWGzHDWYGVVVUV09j//8A+yBR8j3HgLnIASib7C6doc/Vi4zOfEEiSbU5aipKEuq65fwRZfk1hUaT49jb79Jqgl6/338On+OS3Mn2Np6iNGhLdTlqMHMWLe2ez8RcDt2MdpqQauFqhJjZKK1h/GRSZq+zWY4NsjMCCGQLF5gbPE8xb6D+JEtNBoNRIR1MUZUlWgZrM0Rh7ahzlOHskExRvI8x/3yJdnCdwyt/IT3HlVFRBARkiRBk4S4ehv37btw7ShmRh2OGmKMLI0dYDi/iozvJeGfLEYKHUYmniIZexRPPY4NEhGyLCPfPkXOFGVYYSyUNJznLjNDRPA+JT74PA3vqUvZIFXFe0+WZfy+Msvp2Y84e+0oMUbMjBgjRVEQT3xK9uE7ZGWOcw4RoQ5HDSKCmSGW4jQjc2163S4rH3+Ctlr4Q8+ACdpIQRQRoS5HTYlzbG3tZHzkZbz3dBYX6UzPoCPDZM8dpJx6lu6BF2g2m2yGowYRoeEco6OjmBnRItXQENnrr9Fst0jTlDTLUBFUlc1w9MHMMItUoaDhMtaJCEmSsM7MaDab+N270LIkSRJEhLvMjHXRjOLyFdLJSdQ36IfShxgjebfD7K1ThBBY/f4Hlr46SXXjEmH6CPHWj0joofMX6Rw7ToyRzoWfuXPsON35eRYPf0E+N8fyzGkWPjtM6HXpl9KHEANFWRJCoNfrkS8tszJ9itVslHLhNjkJXDlC2c0JIdDtdlk6+TW9GFk+c5buaoc70zN0zpyF7RPEGOmX0g8DM2Ott8TN+XMU129Au43OnsFUKcIwks/RG95JNb9AZ+YbZOsWqhs3qQRCWWDNJqQeOmugSr8cfdAkIfND7N3xImZGfGkPhoEoJYbv/Ea17UnSdpvmq6+wLsaI8RczbP8UIiAIzjlcmtIvRx8SVdI0xcz4O8OwaET/IKIP41X5LyKCqtIvRx9EhCRJ+DdmhpkhIogI95pjk0QEEeH/ogw4ZcApA+5PeXiRopz0nPcAAAAASUVORK5CYII=",width:600,height:450}},45:function(e,t,a){e.exports={srcSet:a.p+"images/20190501006-19b25b0a.png 600w,"+a.p+"images/20190501006-1d384a2d.png 480w",images:[{path:a.p+"images/20190501006-19b25b0a.png",width:600,height:450},{path:a.p+"images/20190501006-1d384a2d.png",width:480,height:360}],src:a.p+"images/20190501006-19b25b0a.png",toString:function(){return a.p+"images/20190501006-19b25b0a.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAADO0lEQVR4Ac3Bb2iUdQDA8e/vt+e5e57z7tncnc5OzQ7CXcM23CJWmOKfloFpkSAL3/QioiJIiRAldKMyGWnQ6t2wWrA3ESpBGS1dlMtJq7tom8NYfwjTtajW7Z67e/Y88bwYjbUX/e4Mns9H5P/MeQSYJOAkAScJOEnASQJOcgN5nseNplGh4a+GOfnWm3yZyTJTcJBSsiwRp/G2eva2t9PU2EQlNMr0Vy7H8Ve7kOQYynxL3apbmW/sp0ke3/8cdzc38WJHB6ZpUg5JGaanp+noPMjTj+1gZPxH6lal8M06DrOOg08IwfKbVjP6w1WOHj9BPp+nHBJFruvS9crLHNy/l1BI5/LENXwFO099MkR9MkTBzjNHD4W5lB3l0OHDlEOi6MLgIM2Nq0nEaygUiggh8TlOiYZ0ioZ0CscpMZ8eCnNhOEsmm0GVRIHrunx49n0e2rEF37J4DUutML4lUYveUxfpPXWRJVGLhZavWMk7fX2okiiwbRsj7CKlYM5Tj+7it8lf8FXXJqiuTbAoIciOXEaVhgLbtjHDVcz38M6tFIslXus5jSvDhAyTaKwaIQQLTU5N4XkeQgj+Kw0FruviefxL++7t7H7wXkbGvuPa9Sn6P73EwNAV4nUrqZSGAk3XmbFLLEbXqmhatxZf25a7+OjcFzzf1UeiLsmcRO1SVEkUREyTP6YdZl2XxQwOZRkcyuJr29xKS0OSf3isS69FCIEKiQJd19m8aRvvnelnobHxCZ480M0TB7oZG5/Ad+f6NKViAd/1qz/zyJ49qJIoEEKwaeNGBj4f5dep35nPsmIIHCQOlhXDZxeKSFlFqVjgjtvTtDS3oEpDUTQaZd8zz/JB/1nu37qeRLwGX3JFgoEz3fhi0Qi+Tz7L4LohNGeGlzpfRwiBKokiIQS3rFlDa+s2jhx7m3dPf4zrevhi0QixaATPg6MnTpId/Z6bExa9PT1YMYtyaJQplUrReeQFzp0/z75Db1Bj6URMnWKxxNffXCFsWHR3HeOeDRvQNI1yaZRJCEG1Vc2uB3ayve0+crkcpVIJKSWGaRIxTTRNo1IaFRJCYBgGhmHwf5AEnCTgJAEnCThJwP0NfncB5XxWH0QAAAAASUVORK5CYII=",width:600,height:450}}}]);