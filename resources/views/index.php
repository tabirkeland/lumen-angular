<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimal-ui" name="viewport">
        <link rel="stylesheet" href="/css/app.css" />
        <script src="/js/app.js"></script>
    </head>
    <body ng-app="lumen-angular">

        <header>
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand">Lumen Angular</a>
                    </div>

                    <ul class="nav navbar-nav navbar-right">
                        <li><a><i class="fa fa-home"></i> This</a></li>
                        <li><a><i class="fa fa-shield"></i> That</a></li>
                        <li><a><i class="fa fa-comment"></i> Other</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <div class="container">
            <div ng-view></div>
        </div>
    </body>
</html>