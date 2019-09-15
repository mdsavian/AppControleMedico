import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../../uteis/Util';

@Component({
  selector: 'app-camera',
  templateUrl: './modal-webcam.component.html'
})
export class ModalWebcamComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  public pictureTaken = new EventEmitter<WebcamImage>();
  public util = new Util();
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.pictureTaken.emit(webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public salvar() {
    var imagem = this.util.dataURIparaBlob(this.webcamImage.imageAsBase64);
    this.activeModal.close(imagem);
  }
}
