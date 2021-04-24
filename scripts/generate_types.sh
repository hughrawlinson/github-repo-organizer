#!/usr/bin/env sh

npx apollo client:codegen \
  --target typescript \
  --header="authorization: Bearer $GITHUB_TOKEN" \
  --endpoint "https://api.github.com/graphql" \
  --includes="**/*.gql,**/*.graphql"
