var Template = {};

Template.row =
  '<div class="row"></div>';

Template.container =
  '<div class="small-<%= width %> rows-<%= height %> component-container column">' +
  '</div>';

Template.header =
  '<div class="large-<%= width %> rows-<%= height %> component-header column">' +
    '<header>' +
      '<h1><%= text %></h1>' +
    '</header>' +
  '</div>';

Template.text =
  '<div class="large-<%= width %> rows-<%= height %> component-text column">' +
    '<%= text %>' +
  '</div>';

Template.image =
  '<div class="large-<%= width %> rows-<%= height %> component-image column">' +
    '<img src="<%= source %>"/>' +
  '</div>';

Template.button =
  '<div class="large-<%= width %> rows-<%= height %> component-button column">' +
    '<a href="<%= href %>" class="button"><%= text %></a>' +
  '</div>';

Template.video =
  '<div class="large-<%= width %> rows-<%= height %> component-video column">' +
    '<video controls>' +
      '<source src="<%= source %>" type="video/mp4">' +
    '</video>' +
  '</div>';
