# Style Guide

## Visão Geral
Este style guide define cores, tipografia e tokens de base para garantir consistência visual em todo o projeto.

---

## Cores

### Base
- `white` → `#FFFFFF`
- `gray-1` → `#1B1D1E`
- `gray-2` → `#333638`
- `gray-3` → `#5C6265`
- `gray-4` → `#B9BBBC`
- `gray-5` → `#DDDEDF`
- `gray-6` → `#EFF0F0`
- `gray-7` → `#FAFAFA`

### Produto
- `red-dark` → `#BF3B44`
- `red-mid` → `#F3BABD`
- `red-light` → `#F4E6E7`

- `green-dark` → `#639339`
- `green-mid` → `#CBE4B4`
- `green-light` → `#E5F0DB`

### Uso no Tailwind (exemplos)
- `bg-red-dark`
- `text-gray-2`
- `border-gray-5`
- `bg-green-light`

---

## Tipografia

### Fonte
- Família: **Nunito Sans**
- Pesos: `Regular (400)` e `Bold (700)`

### Line-height
- Padrão: `130%` (`1.3`)

### Tamanhos
- `12px`, `14px`, `16px`, `18px`, `24px`, `32px`

### Uso no CSS (exemplo)
```css
.title {
  font-size: var(--font-size-24);
  font-weight: 700;
  line-height: var(--line-height-default);
}
