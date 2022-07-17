
# Driven pass


- Para uma senha ser segura, ela deve conter vários caracteres e números misturados, sem contar que o quanto mais longa ela for, melhor.
- *Só que como vamos memorizar senhas gigantes e sem significado semântico?* É para resolver essa dor de cabeça que surgiu o Driven pass! Com ele, criamos apenas uma senha “mestra” e todas as outras senhas ficam gravadas em segredo! Logo, quando precisamos dela, basta lembrar da senha “mestra”!
- Podemos armazenar Senhas de cartões, wifi, web sites e criar notas, tudo de forma segura e criptografada 

## Usage

Install my-project with npm and configure .env

```bash
  git clone git@github.com:marcojr73/projeto19-drivenpass.git
```

```bash
  npm install
  
  npm run dev
```
    
## API Reference

#### Sign-up

```
  POST /sign-up
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `body` |`email` | `string` | **Required**  |
| `body` |`password` | `string` | **Required** |

#### Sign-in

```
  POST /sign-in
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `body` |`email` | `string` | **Required**  |
| `body` |`password` | `string` | **Required** |

#### Create Card 

```
  POST /card/create
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |
| `body` |`number` | `string` | **Required**  |
| `body` |`nameCard` | `string` | **Required** |
| `body` |`cvc` | `string` | **Required**  |
| `body` |`expirationDate` | `string` | **Required** |
| `body` |`password` | `string` | **Required** |
| `body` |`isVirtual` | `boolean` | **Required**  |
| `body` |`type` | `string` | **Required** |
| `body` |`title` | `string` | **Required** |
types must be credit or debit

#### Views the cards

```
  GET /card
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### View an card

```
  GET /card/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Delete an card

```
  DELETE /card/delete/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Create credential

```
  GET /credentials/create
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `string` | **Required**  |
| `body` |`url` | `string` | **Required**  |
| `body` |`userName` | `string` | **Required**  |
| `body` |`password` | `string` | **Required**  |
| `body` |`title` | `string` | **Required**  |

#### Views the credentials

```
  GET /credentials
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### View an credential

```
  GET /credentials/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Delete an credential

```
  DELETE /credentials/delete/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Create security note

```
  POST /notes/create
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |
| `body` |`title` | `string` | **Required**  |
| `body` |`note` | `string` | **Required**  |

#### view the secure notes

```
  GET /notes/
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### view a secure note

```
  GET /notes/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Delete a secure note

```
  DELETE /notes/delete/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Create security note

```
  POST /wifi/create
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |
| `body` |`nameWireless` | `string` | **Required**  |
| `body` |`password` | `string` | **Required**  |
| `body` |`title` | `string` | **Required**  |

#### View the wifi

```
  GET /wifi
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |


#### View a wifi

```
  GET /wifi/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Delete a wifi

```
  DELETE /wifi/:id
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

