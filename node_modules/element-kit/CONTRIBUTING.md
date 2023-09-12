# Contributing to Element Kit

There are several ways of contributing to Element Kit.

* Help improve the documentation
* Report an issue by creating an [issue on Github](https://github.com/mkay581/element-kit/issues/new).
* Help with any open [issues](https://github.com/mkay581/element-kit/issues). The most accurate and clearly written issues are more likely to be fixed sooner.
* Contribute to the code base.

## Improving documentation

Any help to improve documentation makes Element Kit much more understandable and easier to use. Feel free to lend a hand in helping in any one of the following areas of documentation:

* [JSDoc/API documentation](http://mkay581.github.io/element-kit/)
* [Demos](https://github.com/mkay581/element-kit/tree/master/demo)
* [Examples page](https://github.com/mkay581/element-kit/blob/master/docs/element.md)

## Reporting an issue

To save everyone time and make it much more likely for your issue to be understood, worked on and resolved quickly, it would help if you're mindful of [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) when pressing the "Submit new issue" button.

## Contributing to the code base

Pick [an issue](https://github.com/mkay581/element-kit/issues) to fix, or pitch
new features. To avoid wasting your time, please ask for feedback on feature
suggestions with [an issue](https://github.com/mkay581/element-kit/issues/new).

### Run the tests

#### On Node

    $ npm test

#### In the browser

Some tests needs working XHR to pass. To run the tests over an HTTP server, run

    $ grunt server

##### Testing in development

Open [0.0.0.0:8080/tests/](http://0.0.0.0:8080/tests/) in a browser.


### Do a build

    $ grunt build
    
Which will build the project into the build folder.

### Publish the JSdocs

    $ grunt publish_docs
    
