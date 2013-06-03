require './responsive'
use Rack::Static, :urls => ['/stylesheets', '/javascripts'], :root => 'public'

run Application
