/*global describe, it, kettu*/

describe("SortTorrentsHelpers", function() {
  var sort_helpers = kettu.SortTorrentsHelpers;
  
  it("should be sortable by name", function() {
    var torrents = [
      new kettu.Torrent({'id': '1', 'name': 'Zelda'}),
      new kettu.Torrent({'id': '2', 'name': 'Alpha'}),
      new kettu.Torrent({'id': '3', 'name': 'Manfred'})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('name', torrents);
    expect(sorted_torrents[0].id).to.equal('2');
    expect(sorted_torrents[1].id).to.equal('3');
    expect(sorted_torrents[2].id).to.equal('1');
  });
  
  it("should be sortable by activity", function() {
    var torrents = [
      new kettu.Torrent({'id': '1', 'rateDownload': 0, 'rateUpload': 0}),
      new kettu.Torrent({'id': '2', 'rateDownload': 512, 'rateUpload': 256}),
      new kettu.Torrent({'id': '3', 'rateDownload': 512, 'rateUpload': 5})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('activity', torrents);
    expect(sorted_torrents[0].id).to.equal('1');
    expect(sorted_torrents[1].id).to.equal('3');
    expect(sorted_torrents[2].id).to.equal('2');
  });

  it("should be sortable by age", function() {
    var torrents = [
      new kettu.Torrent({'id': '1', 'addedDate': 20100102}),
      new kettu.Torrent({'id': '2', 'addedDate': 20100201}),
      new kettu.Torrent({'id': '3', 'addedDate': 20100115})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('age', torrents);
    expect(sorted_torrents[0].id).to.equal('2');
    expect(sorted_torrents[1].id).to.equal('3');
    expect(sorted_torrents[2].id).to.equal('1');
  });

  it("should be sortable by progress", function() {
    var torrents = [
      new kettu.Torrent({'id': '1', 'sizeWhenDone': 100, 'leftUntilDone': 0, 'uploadedEver': 0, 'downloadedEver': 100}),
      new kettu.Torrent({'id': '2', 'sizeWhenDone': 100, 'leftUntilDone': 50, 'uploadedEver': 30, 'downloadedEver': 50}),
      new kettu.Torrent({'id': '3', 'sizeWhenDone': 100, 'leftUntilDone': 50, 'uploadedEver': 20, 'downloadedEver': 50}),
      new kettu.Torrent({'id': '4', 'sizeWhenDone': 100, 'leftUntilDone': 100, 'uploadedEver': 0, 'downloadedEver': 0})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('progress', torrents);
    expect(sorted_torrents[0].id).to.equal('4');
    expect(sorted_torrents[1].id).to.equal('3');
    expect(sorted_torrents[2].id).to.equal('2');
    expect(sorted_torrents[3].id).to.equal('1');
  });

  it("should be sortable by queue", function() {
    var torrents = [
      new kettu.Torrent({'id': '2'}),
      new kettu.Torrent({'id': '1'}),
      new kettu.Torrent({'id': '3'})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('queue', torrents);
    expect(sorted_torrents[0].id).to.equal('1');
    expect(sorted_torrents[1].id).to.equal('2');
    expect(sorted_torrents[2].id).to.equal('3');
  });

  it("should be sortable by state", function() {
    var torrents = [
      new kettu.Torrent({'id': '1', 'status': 16}),
      new kettu.Torrent({'id': '2', 'status': 4}),
      new kettu.Torrent({'id': '3', 'status': 8})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('state', torrents);
    expect(sorted_torrents[0].id).to.equal('2');
    expect(sorted_torrents[1].id).to.equal('3');
    expect(sorted_torrents[2].id).to.equal('1');
  });
  
  it("should sort reverse if reverse is true", function() {
    var torrents = [
      new kettu.Torrent({'id': '1', 'rateDownload': 0, 'rateUpload': 0}),
      new kettu.Torrent({'id': '2', 'rateDownload': 512, 'rateUpload': 256}),
      new kettu.Torrent({'id': '3', 'rateDownload': 512, 'rateUpload': 5})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('activity', torrents, true);
    expect(sorted_torrents[0].id).to.equal('2');
    expect(sorted_torrents[1].id).to.equal('3');
    expect(sorted_torrents[2].id).to.equal('1');
  });
  
  it("should not sort reverse if reverse if false", function() {
    var torrents = [
      new kettu.Torrent({'id': '1', 'rateDownload': 0, 'rateUpload': 0}),
      new kettu.Torrent({'id': '2', 'rateDownload': 512, 'rateUpload': 256}),
      new kettu.Torrent({'id': '3', 'rateDownload': 512, 'rateUpload': 5})
    ];
    var sorted_torrents = sort_helpers.sortTorrents('activity', torrents, false);
    expect(sorted_torrents[0].id).to.equal('1');
    expect(sorted_torrents[1].id).to.equal('3');
    expect(sorted_torrents[2].id).to.equal('2');
  });
});