var Template = {};

Template.row =
  '<div class="row"></div>';

Template.container =
  '<div class="large-<%= width %> columns">' +
  '</div>';

Template.header =
  '<div class="large-<%= width %> columns">' +
    '<header>' +
      '<h1><%= text %></h1>' +
    '</header>' +
  '</div>';

Template.text =
  '<div class="large-<%= width %> columns">' +
    '<p><%= text %></p>' +
  '</div>';

Template.image =
  '<div class="large-<%= width %> columns">' +
    '<img src="<%= source %>"/>' +
  '</div>';

Template.button =
  '<div class="large-<%= width %> columns">' +
    '<a href="<%= href %>" class="button"><%= text %></a>' +
  '</div>';

Template.video =
  '<div class="large-<%= width %> columns">' +
    '<video controls>' +
      '<source src="<%= source %>" type="video/mp4">' +
    '</video>' +
  '</div>';
