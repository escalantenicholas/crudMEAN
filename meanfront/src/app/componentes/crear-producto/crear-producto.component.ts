import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from '../../modelos/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup
  titulo = "Crear Producto"
  id: String | null

  constructor(private fb: FormBuilder, 
              private router: Router,
              private toastr: ToastrService, 
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      nombre: ['',Validators.required],
      categoria: ['',Validators.required],
      ubicacion: ['',Validators.required],
      precio: ['',Validators.required],  
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarProducto(){

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    
    if(this.id !== null){
      console.log(PRODUCTO)
      this._productoService.editarProducto(this.id,PRODUCTO).subscribe(data => {
        this.toastr.success('EL producto fue actualizado con exito!', 'Producto Actualizado');
        this.router.navigate(['/'])
      },error => {
        console.log(error)
        this.productoForm.reset()
      })
    }else{
      console.log(PRODUCTO)
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        this.toastr.success('EL producto fue registrado con exito!', 'Producto Registrado');
        this.router.navigate(['/'])
      },error => {
        console.log(error)
        this.productoForm.reset()
      })
    }
  }
  
  //Llena campos de formulario para editar
  esEditar(){
    
    if(this.id !== null){
      this.titulo = 'Editar producto'
      this._productoService.obtenerPorId(this.id).subscribe(data => {
        this.productoForm.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
      })
    }

  }


}
