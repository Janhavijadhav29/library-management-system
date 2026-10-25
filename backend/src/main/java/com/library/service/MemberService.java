package com.library.service;

import com.library.entity.Member;
import com.library.exception.ResourceNotFoundException;
import com.library.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private final MemberRepository repository;

    public MemberService(MemberRepository repository) {
        this.repository = repository;
    }

    public List<Member> getAll() {
        return repository.findAll();
    }

    public Member getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not found with id: " + id));
    }

    public Member create(Member member) {
        member.setId(null);
        return repository.save(member);
    }

    public Member update(Long id, Member updated) {
        Member existing = getById(id);
        existing.setName(updated.getName());
        existing.setEmail(updated.getEmail());
        existing.setPhone(updated.getPhone());
        existing.setMembershipDate(updated.getMembershipDate());
        return repository.save(existing);
    }

    public void delete(Long id) {
        Member existing = getById(id);
        repository.delete(existing);
    }

    public List<Member> search(String keyword) {
        return repository.findByNameContainingIgnoreCase(keyword);
    }
}
