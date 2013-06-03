class Application < Sinatra::Application

  get '/' do
    erb :index
  end

  get '/data' do
    content_type :json
    Page.last.extend(Representers::Page).to_json
  end

end
