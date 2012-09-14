#FormBot

##Step #1: Define your template (with ICanHaz.js):

```html
<form>
  {{#fields}}
  {{#errors}}<span class="error">{{.}}</span>{{/errors}}
  <label for="{{id}}">{{label}}</label>
  <input id="{{id}}" {{#placeholder}}placeholder="{{placeholder}}"{{/placeholder}} type="{{type}}" name="{{name}}" value="{{value}}"/>      
  {{/fields}}
  <button>Submit</button>
</form>
```

##Step #2: Define your fields, include as many validation tests that you want:

```javascript
var f = new Form({
  fields: [
    {
      name: 'first_name',
      label: 'First Name',
      placeholder: 'Something',
      required: true
    },
    {
      name: 'last_name',
      label: 'Last Name',
      tests: [
        {
          test: function (val) {
            return false;
          },
          message: 'something will always go wrong'
        }
      ],
      required: true
    }
  ],
  submit: function (vals) {
    console.log(vals);
  },
  error: function (vals) {
    console.log('error', vals);
  }
});
```


##Step #3: Render it once. It handles itself after that:
   
```javascript 
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#something').appendChild(f.render());
});
```


FormBot will handle form submit, and call your callback if everything's happy.

##Bonus Step #4: Asynchronous validation

You know how you've always got that one field that needs to be checked via ajax. It's a pain. Because most of your tests are simple regexes that can be run synchronously except for this one stupid ajax call to check if a username is available. So, just do this:

```javascript
// your field definition
{
  name: 'email',
  label: 'Email',
  tests: [
    // BAM! add the `async` flag and your test will receive a third argument. A callback.
    {
      async: true, 
      test: function (email, formInstance, cb) {
        $.get('/email-is-avail?val=' + email, function (data) {
          cb(data === '1');
        });
      },
      message: 'This email is already in use.'
    },
    // You can have simple synchronous tests alongside as well.
    // and it still Just Works™
    {
      test: _.isEmail,
      message: 'This doesn\'t seem like a real email address'
    }
  ],
  required: true
}
```

It's simple, but that's all for now. Because it works for what I need for this particular app. Contributions welcomed.

Cheers,

 \- [@HenrikJoreteg](http://twitter.com/henrikjoreteg)

##Gotchas

 - Requires IE8 or newer because I didn't want jQuery as a dependency.
 - Won't really work with checkboxes/radioboxes and such, just yet.


