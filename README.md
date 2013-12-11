# jQuery-GAET

A jQuery plugin to automatically add Google Analytics Event Tracking to elements


## Usage

Add event tracking to clickable elements by simply providing data attributes in the markup.

```
<a href="http://example.com" data-category="category-1" data-action="action-1">Link</a>
```

```
$('a').gaet();
```

The plugin accepts an options object with the following parameters:

**asynchronous (true)**

This boolean value is used to tell the plugin which style of Google Analytics snippet you are using. It defaults to the asynchronous tracking which is documented here: https://developers.google.com/analytics/devguides/collection/gajs/asyncTracking

**prefix**

A string value for supplying a Google Analytics account prefix. Useful when using multiple accounts on the same page.

**eventType ('click')**

A string value to indicate which jQuery event you want to attach to the element.
