Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#welcome'
  get 'samples/show'
  get 'samples/ajax'
  post 'samples/post_ajax'
  get 'components/show'
  get 'checkboxes/show'
end
