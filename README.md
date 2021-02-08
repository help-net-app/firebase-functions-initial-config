## Dependencies

- npm i express cors

## Dev Dependencies

- npm i -D typescript tsc-watch @types/cors @types/express

## Settings

- Add a `.runtimeconfig.json` file to your `functions/` directory. This will represent your local environment variables.

```
{
  "example": {
    "key": "<YOUR_MAILGUN_API_TOKEN>",
    "value": "<YOUR_EMAIL_SENDER_DOMAIN>"
  }
}
```
