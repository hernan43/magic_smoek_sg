Rails.application.routes.draw do
  resources :projects
  devise_for :users
  get "dashboard" => "users#dashboard", as: :user_dashboard

  get "up" => "rails/health#show", as: :rails_health_check

  root "base#index"
end
