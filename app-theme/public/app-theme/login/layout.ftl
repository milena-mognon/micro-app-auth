<#macro registrationLayout title="">
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="description"
      content="Autenticação"
    />

    <#if properties.meta?has_content>
      <#list properties.meta?split(' ') as meta>
        <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
      </#list>
    </#if>

    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
    <link rel="icon" href="${url.resourcesCommonPath}/img/favicon.ico" />

    <title>${msg("loginTitle",(realm.displayName!''))}</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>
      var obj = {
        i18nEnable: ${realm.internationalizationEnabled?string},
        // loginTitle: "${kcSanitize(msg("loginTitleHtml",(realm.displayNameHtml!'')))?no_esc}",
        <#if realm.internationalizationEnabled && locale.supported?size gt 1>
        locale: {
          currentLocale: "${locale.current}",
          locales: [
            <#list locale.supported as l>
              {
                label: "${l.label}",
                url: "${l.url?no_esc}"
              },
            </#list>
          ]
        },
       </#if>
       title: "${title}",
      };
    </script>
    <#nested "scripts">
  </body>
</html>

</#macro>
