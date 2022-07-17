
# Driven pass


- Para uma senha ser segura, ela deve conter vários caracteres e números misturados, sem contar que o quanto mais longa ela for, melhor.
- *Só que como vamos memorizar senhas gigantes e sem significado semântico?* É para resolver essa dor de cabeça que surgiu o Driven pass! Com ele, criamos apenas uma senha “mestra” e todas as outras senhas ficam gravadas em segredo! Logo, quando precisamos dela, basta lembrar da senha “mestra”!
- Podemos armazenar Senhas de cartões, wifi, web sites e criar notas, tudo de forma segura e criptografada 

## Usage

Install my-project with npm

```bash
  git clone git@github.com:marcojr73/projeto19-drivenpass.git
```

```bash
  npm install
  
  npm run dev
```
    
## API Reference

#### Sign-up

```http
  POST /sign-up
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `body` |`email` | `string` | **Required**  |
| `body` |`password` | `string` | **Required** |

#### Sign-in

```http
  POST /sign-in
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `body` |`email` | `string` | **Required**  |
| `body` |`password` | `string` | **Required** |

#### Create Card 

```http
  POST /card/create
```

| type |Parameter | Type     |                 |
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

```http
  GET /card
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### View an card

```http
  GET /card/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Delete an card

```http
  DELETE /card/delete/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Create credential

```http
  GET /credentials/create
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `string` | **Required**  |
| `body` |`url` | `string` | **Required**  |
| `body` |`userName` | `string` | **Required**  |
| `body` |`password` | `string` | **Required**  |
| `body` |`title` | `string` | **Required**  |

#### Views the credentials

```http
  GET /credentials
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### View an credential

```http
  GET /credentials/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Delete an credential

```http
  DELETE /credentials/delete/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### create security note

```http
  POST /notes/create
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |
| `body` |`title` | `string` | **Required**  |
| `body` |`note` | `string` | **Required**  |

#### view the secure notes

```http
  GET /notes/
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### view a secure note

```http
  GET /notes/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### Delete a secure note

```http
  DELETE /notes/delete/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### create security note

```http
  POST /wifi/create
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |
| `body` |`nameWireless` | `string` | **Required**  |
| `body` |`password` | `string` | **Required**  |
| `body` |`title` | `string` | **Required**  |

#### view the wifi

```http
  GET /wifi
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |


#### view a wifi

```http
  GET /wifi/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |

#### delete a wifi

```http
  DELETE /wifi/:id
```

| type |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer string` | **Required**  |



#### add(num1, num2)

Takes two numbers and returns the sum.

