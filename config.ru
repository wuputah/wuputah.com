require 'rubygems'
require 'bundler'
Bundler.setup(:default, :production)
require 'toto'

class Redirector
  HOSTNAME = 'jonathandance.com'
  def initialize(app)
    @app = app
  end

  def call(env)
    request = Rack::Request.new(env)
    if !canonical_url?(request)
      [301, { 'Location' => canonical_url(request) }, []]
    else
      @app.call(env)
    end
  end

  def canonical_url?(request)
    request.host == HOSTNAME && request.scheme == 'https'
  end

  def canonical_url(request)
    'https://' + HOSTNAME + request.fullpath
  end
end

use Rack::ShowExceptions if ENV['RACK_ENV'] == 'development'
use Rack::CommonLogger
use Redirector unless ENV['RACK_ENV'] == 'development'
use Rack::Static, :urls => ['/css', '/js', '/images', '/favicon.ico'], :root => 'public'

# borrowed from cloudhead/cloudhead.io
class Toto::Site
  def writings(*args)
    index(*args)
  end
end

#
# Create and configure a toto instance
#
toto = Toto::Server.new do
  #
  # Add your settings here
  # set [:setting], [value]
  #
  set :author,    'Jonathan Dance'
  set :title,     'Jonathan Dance'
  set :date,      lambda { |now| now.strftime("%Y-%m-%d") }
  set :url,       'https://www.jonathandance.com'
  set :root,      "home"
  # set :disqus,    'wuputah'
  # set :markdown,  :smart                                    # use markdown + smart-mode
  # set :summary,   :max => 150, :delim => /~/                # length of article summary and delimiter
  set :ext,       'markdown'                                  # file extension for articles
  set :cache,      86400                                      # cache duration, in seconds
end

run toto
