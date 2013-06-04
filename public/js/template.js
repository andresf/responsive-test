var Template = {};

Template.row =
  '<div class="row"></div>';

Template.header =
  '<div class="header"></div>';

Template.container =
  '<div class="small-<%= cols %> rows-<%= rows %> component-container column">' +
  '</div>';

Template.header =
  '<div class="large-<%= cols %> rows-<%= rows %> component-header column">' +
    '<header>' +
      '<image src="<%= logo_url %>">' +
    '</header>' +
  '</div>';

Template.text =
  '<div class="large-<%= cols %> rows-<%= rows %> component-text column">' +
    '<%= markdown %>' +
  '</div>';

Template.image =
  '<div class="large-<%= cols %> rows-<%= rows %> component-image column">' +
    '<img src="<%= url %>"/>' +
  '</div>';

Template.button =
  '<div class="large-<%= cols %> rows-<%= rows %> component-button column">' +
    '<a href="<%= url %>" class="button"><%= text %></a>' +
  '</div>';

Template.video =
  '<div class="large-<%= cols %> rows-<%= rows %> component-video column">' +
    '<video controls>' +
      '<source src="<%= url %>" type="video/mp4">' +
    '</video>' +
  '</div>';
