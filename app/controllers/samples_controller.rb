class SamplesController < ApplicationController
  def show
  end

  def ajax
    respond_to do |format|
      format.html # ajax.html.erb
      format.json { render json: { name: "ok" } }
    end
  end

  def post_ajax
    render json: {name: "piyopiyo"}
  end
end
