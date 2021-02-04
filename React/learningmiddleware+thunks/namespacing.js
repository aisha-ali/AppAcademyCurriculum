# config / routes.rb

namespace: api do
  resources: cats, only: [: index]
end