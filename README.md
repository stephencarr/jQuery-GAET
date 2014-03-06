# jQuery-GAET

A jQuery plugin to automatically add Google Analytics Event Tracking to elements


## Usage

Add event tracking to clickable elements by simply providing data attributes in the markup:

```html
<a href="http://example.com" data-category="category-1" data-action="action-1">Link</a>
```

The plugin also supports the optional attributes:

```html
<a href="http://example.com" data-category="category-1" data-action="action-1" data-label="opt-label" data-value="opt-value" data-noninteraction="opt-noninteraction">Link</a>
```

Apply the plugin as follows:

```javascript
$('a').gaet();
```

## Configuration

The plugin accepts an optional configuration object which accepts the following properties:

### asynchronous
```javascript
options = {
  asynchronous: true
}
```

This boolean value is used to tell the plugin which style of Google Analytics snippet you are using. It defaults to the asynchronous tracking which is documented here: https://developers.google.com/analytics/devguides/collection/gajs/asyncTracking

### prefix
```javascript
options = {
  prefix: ''
}
```

A string value for supplying a Google Analytics account prefix. Useful when using multiple accounts on the same page.

### eventType
```javascript
options = {
  eventType: 'click'
}
```

A string value to indicate which jQuery event you want to attach to the element.
