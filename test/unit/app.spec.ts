import { App } from '../../src/app';
import { Container } from "aurelia-dependency-injection";
import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";
import { Aurelia } from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

let component;
let viewModel: App;
<<<<<<< HEAD
let container: Container;

describe('the app', () => {

  beforeEach(() => {
    container = new Container();
=======

describe('the app', () => {
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });

  it('says hello too', done => {
    let container: Container = new Container();
>>>>>>> upstream/master

    viewModel = container.get(App);
    viewModel.message = "42";

    component = StageComponent
<<<<<<< HEAD
      .withResources()
      .inView("<app></app>")
      .boundTo(viewModel);

    component.bootstrap(aurelia => {
      aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName("aurelia-webpack-plugin"))
        .plugin(PLATFORM.moduleName("aurelia-kendoui-bridge"));
    });

  });
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });

  it('says hello too', done => {

=======
        .withResources()
        .inView("<app></app>")
        .boundTo(viewModel);

    component.bootstrap(aurelia => {
        aurelia.use
            .standardConfiguration()
            .plugin(PLATFORM.moduleName("aurelia-kendoui-bridge"));
    });

>>>>>>> upstream/master
    component.create(bootstrap).then(() => {
        console.log('viewModel.message' + viewModel.message);
        expect(viewModel.message).toBe('42');
        done();
      });
  });
<<<<<<< HEAD

  it('shows notifications', done => {
    spyOn(viewModel, "showNotification").and.callFake((logger, e) => {/**/});
    component.create(bootstrap).then(() => {
      expect(viewModel.showNotification("info")).toHaveBeenCalled();
      expect(viewModel.showNotification("warning")).toHaveBeenCalled();
      expect(viewModel.showNotification("error")).toHaveBeenCalled();
      done();
    });
  });
=======
>>>>>>> upstream/master
});
