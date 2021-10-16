<#import "layout.ftl" as layout>

<@layout.registrationLayout title=msg("doLogIn"); section>
  <#if section = 'scripts'>
  <script>
    var pageProps = {
        loginEnabled: "${realm.password?string}",
        loginAction: "${url.loginAction?no_esc}"
    }
  </script>
    <%= htmlWebpackPlugin.tags.bodyTags %>
  </#if>
</@layout.registrationLayout>