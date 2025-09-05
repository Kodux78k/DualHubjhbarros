# ASSERT • Dual.Infodose • GitHub Pages

Esta pasta `docs/` é servida pelo GitHub Pages.

## Estrutura
- `docs/index.html` → **Hub ASSERT (dinâmico • POWER)** (Home)
- `docs/apps/apps.json` → lista dinâmica de apps
- `docs/PWA_TICO_Ultra/` → PWA TICOs Ultra completo
- `docs/icons/` → ícones do Hub (maskable/mono/apple)

## Como rodar local
```bash
cd docs
python -m http.server 8000
# abra http://localhost:8000/
```

## Como publicar
1. Commitar tudo e fazer push no branch principal (ex.: `main`).
2. No repositório -> Settings -> Pages -> Source = **Deploy from a branch**, Branch = **main /docs**.
3. Acesse: `https://<seu-usuario>.github.io/<seu-repo>/`.
