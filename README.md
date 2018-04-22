# jekyll-boilerplate #
Jekyll Starter theme with css and js minification using grunt and bootstrap scss, this theme was based on [Jekyll Dentist Smile Theme](https://github.com/obaez/dentistsmile).

Is a clean theme to start any project with Jekyll, based on best practices and thinking of optimization and better times of load.

## Specific Version ##

This a version of the main theme ( master branch ) but whit multilanguage support provided by [jekyll-multiple-languages](http://jekyll-langs.liaohuqiu.net/) plugin, please see the plugin page to specific documentation.

## Install ##

You need to have jekyll and npm packages installed.

* Clone this repo
 
    git clone https://github.com/Richzendy/jekyll-boilerplate.git
   
* Install grunt packages
 
    npm install
    
## Install Jekyll plugins ##

    gem install jekyll-sitemap
    gem install jekyll-paginate
    gem install jekyll-multiple-languages
   
## Run the project ##

* Inside the project folder execute the grunt tasks

To generate the css files:

    grunt sass
    grunt autoprefixer
  
To generate the js file

    grunt concat
    grunt uglify
  
To build the svg icons

    grunt svgmin
    grunt svgstore
  
Finally to see changes and rebuild

    grunt watch
  
* On another terminal execute the jekyll server

    jekyll serve
  
* On your browser go to http://localhost:4000

## Using the theme ##

* Try to make html blocks on your code, this blocks from the css side can be components, look the **_scss/components** folder, components can be added/removed from the *_scss/main.scss* file.

* CSS configurations and bootstrap override go on the **_scss/utils/_config.scss** file

* Remove bootstrap components? go to **_scss/_bootstrap.scss**

* To make loops, please use .yml files on **_data/** folder.

* To custom javascript code, please use the **js/custom.js** file.


## Another versions ##

This theme have another versions with more features, please see the branchs:

* [HomePage, Gallery page and Blog](https://github.com/Richzendy/jekyll-boilerplate/tree/page-gallery-blog) 

## Demos ##

* Master - [http://jekyll-boilerplate.richzendy.org/](http://jekyll-boilerplate.richzendy.org/)
* i18n (multilingual) - [http://jekyll-boilerplate.richzendy.org/i18n/](http://jekyll-boilerplate.richzendy.org/i18n/)
* HomePage, Gallery page and Blog - [http://jekyll-boilerplate.richzendy.org/page-gallery-blog/](http://jekyll-boilerplate.richzendy.org/page-gallery-blog/)

## Resources ##

* Images thanks to https://pixabay.com/es/users/krzysztof-m-1363864/
* Logon and favicon icon from https://www.iconfinder.com/icons/2672699/app_essential_house_object_ui_ux_icon
