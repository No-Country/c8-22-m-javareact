
package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.model.Address;
import com.nocountry.cabininn.service.IAddressService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/addresses")
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
    
    @Autowired
    private IAddressService addServ;
    
    @GetMapping("")
    public ResponseEntity<List<Address>> showAddresses(){
        return ResponseEntity.ok().body(addServ.showAddresses());
    }
    
    @GetMapping("/{id}")
    public Address findAddress(@PathVariable Long id) {
        return addServ.findAddress(id).orElse(null);
    }
    
    @PostMapping("/add")
    public ResponseEntity<Address> createAddress(@RequestBody Address address){ 
                                                                                        
        addServ.createAddress(address);
        return ResponseEntity.ok().body(address);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteAddress(@PathVariable Long id){
        addServ.deleteAddress(id);
    }
    
}
