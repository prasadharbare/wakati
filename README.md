# wakati

wakati is a simple API to calculate the speed of typing.

## Usage

```bash
curl -X GET "https://wakati.vercel.app/api?text=Lorem Ipsum is simply dummy text of t ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electhe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
```

#get
    
    curl -X GET "https://wakati.vercel.app/api?text=Lorem Ipsum is simply dummy text of t ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electhe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
#post

    curl -X POST "https://wakati.vercel.app/api" -H "Content-Type: application/json" -d '{"text":"Lorem Ipsum is simply dummy text of t ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electhe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}'


## License


