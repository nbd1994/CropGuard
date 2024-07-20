package dev.nati.vsion;


import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.Media;
import org.springframework.ai.chat.model.Generation;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.List;

@RestController
@CrossOrigin
public class View {
    public final ChatClient chatlient;
    public final HashSet<String> images;
    //why couldn't spring find beans for chat client
    public View(ChatClient.Builder builder) {
        this.chatlient = builder
                .build();
        this.images = new HashSet<>();
        images.addAll(List.of("jpg","png","jpeg","gif"));
    }

    @GetMapping("images")
    public String image(
            @RequestParam(value = "message", defaultValue = "why is the sky blue") String message
    ) {
        return chatlient
                .prompt()
                .user(message)
                .call()
                .content();

    }

    @GetMapping("/ai/llava")
    public String imageprocessor() throws MalformedURLException {
        Path imagepath = Paths.get("src/main/resources/mangoshoot_sml.jpg");
        Resource im = new UrlResource(imagepath.toUri());
        return chatlient
                .prompt()
                .user(data -> {
                    data.media(new Media(MimeTypeUtils.IMAGE_JPEG, im));
                    data.text("Does the plant look healthy?");
                })
                .call()
                .content();
    }

    @PostMapping("/upload")
    public ResponseEntity<String> upload(
            @RequestParam("picture") MultipartFile file,
            @RequestParam("name") String name
    ) throws IOException {
        Files.createDirectories(Paths.get("uploads"));
        String filename=file.getOriginalFilename();
        int indexOfDot=filename.indexOf(".");
        String extension=filename.substring(indexOfDot+1);
        if(!images.contains(extension)){
            return ResponseEntity.badRequest().body("Invalid file type");
        }
        Files.copy(file.getInputStream(), Paths.get("uploads", file.getOriginalFilename()));
        return ResponseEntity.ok(extension);
    }
}
