# GLUI

React boilerplate with CSS template using Grids.

## Style components
### Grid Container
### Message
### Form
### Table
### Panel
### Card
### Dropdown
### Buttons
### Tooltip

## React Components

### Dropdown
```html
<Dropdown label="Some label">
    <li><a href="http://example.com">Example</a></li>
    <li><a href="#">Some other example</a></li>
</Dropdown>
```
The `label` prop will be set as the placeholder text.
#### Props
 - `label` placeholder text.
 - `className` class name for the placeholder.
 
### Tooltip
```html
<Tooltip message="some message">
    some text
</Tooltip>
```
The tooltip appears on the bottom.
#### Props
 - `message` the message that will appear
 - `top` to make the tooltip appear on top

### Switchers
#### SwitcherClass
```html
<a id="hamButton" role="button"><span className="oi" data-glyph="menu" aria-hidden/></a>
<SwitcherClass trigger="hamButton" className="active">
    <nav class="sidebar">
        Somme content
    </nav>
</SwitcherClass>
```
##### Props
 - `trigger` id of the trigger element
 - `className` class to switch
#### Switcher
##### Props
 - `trigger`

### Message
```html
<Message timer="5">
    Message content
</Message>
```

#### Props
 - `error`, `success`, `warning`, `default'
 - `timer` value in sec before the message is hidden
 
### Forms
```html
<Form>
    // Content
</Form>
```
#### Props
 - `action`
 - `method`
 - `submit`
 - `onChange`(id, value, success, message)
 - `onSubmit`(values)
 
#### Input
```html
<Input id="idOfInput" />
```
##### Props
- `id` name of the input
- `type` type
- `label`
- `help` text that appear underneath the input
- `required`
- `rule` regexp
- `ruleMessage` text that appears if the `rule` is not matched
- `success`, `error`, `warning`, `default`

#### Select
```html
<Select id="numbers">
    <option value="1">1</option>
    <option value="2">2</option>
</Select>
```
##### Props
- `id`
- `label`
- `value` value of the selected option
- `success`, `error`, `warning`, `default`

#### List
```html
<List id="gender">
    <ListItem value="male" label="Male"/>
    <ListItem value="female" label="Female"/>
</List>
```
##### Props
- `id`
- `label`
- `value`
- `searchable` add a search input
- `multiple` multiple choices
- `success`, `error`, `warning`, `default`