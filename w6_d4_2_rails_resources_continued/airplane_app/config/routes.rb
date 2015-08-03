Rails.application.routes.draw do

  # homepage ("/") goes to planes controller, index action
  root to: "planes#index"

  # CRUD routes for planes
  resources :planes

  # get "/planes", to: "planes#index"
  # post "/planes", to: "planes#create"
  # get "/planes/new", to: "planes#new"
  # get "/planes/:id/edit", to: "planes#edit"
  # get "/planes/:id", to: "planes#show"
  # put "/planes/:id", to: "planes#update"
  # delete "/planes/:id", to: "planes#destroy"

end